
import { put, call } from 'redux-saga/effects'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { CreateUser, GetUser } from '../../graphql'
import { USER_DATA_LOADED } from '../actions/types'


async function getAuthedUserDetails() {
    return await Auth.currentAuthenticatedUser()
}

async function getUserData(uuid: string) {
    return await API.graphql(graphqlOperation(GetUser, { uuid }))
}

async function createNewUser(params: any) {
    return await API.graphql(graphqlOperation(CreateUser, params))
}


export function* handleAuth(action: any) {
    const authType = action.payload
    const userDetails = yield call(getAuthedUserDetails)
    console.log(userDetails)
    const userDataRes = yield call(getUserData, userDetails.id)
    const userData = userDataRes.data.getUser
    console.log(userData)

    if (authType === 'email') {
        if (!userData) {
            const params = {
                uuid: userDetails.id,
                profile: { name: userDetails.name.split(' ')[0] },
                meets: [],
                attending: []
            }

            try {
                const createUserRes = yield call(createNewUser, params)
                console.log(createUserRes)
            } catch (e) {
                console.log(e, 'error creating new user')
            }
        } else {
            yield put({ type: USER_DATA_LOADED, payload: userData })
        }

    } else if (authType === 'social') {

        if (!userData) {
            const name = userDetails.name.split(' ')[0]

            let profile: { name: string, email?: string } = {
                name
            }
            if (userDetails.email) {
                profile = { ...profile, email: userDetails.email }
            }
            const params = {
                uuid: userDetails.id,
                profile,
                meets: [],
                attending: []
            }

            try {

                const createUserRes = yield call(createNewUser, params)
                console.log(createUserRes)

                // load current user details we have to store with action

            } catch (e) {
                console.log(e)
            }
        } else {
            yield put({ type: USER_DATA_LOADED, payload: userData })
            // load user profile
        }
    }
}
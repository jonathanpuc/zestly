
import { put, call } from 'redux-saga/effects'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { CreateUser, GetUser } from '../../graphql'
import { USER_DATA_LOADED, AUTH_SUCCESS } from '../actions/types'


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
    const uuid = userDetails.id ? userDetails.id : userDetails.username
    const userDataRes = yield call(getUserData, uuid)
    const userData = userDataRes.data.getUser
    console.log(userData)

    if (authType === 'email') {
        console.log('__EMAIL__', userData)

        if (!userData) {
            const params = {
                uuid,
                profile: { email: userDetails.attributes.email },
                meets: [],
                attending: []
            }

            try {
                const createUserRes = yield call(createNewUser, params)
                console.log(createUserRes, '__USER-CREATED__')
                const { attending, meets, profile } = createUserRes.data.createUser
                // load current user details we have to store with action
                yield put({ type: USER_DATA_LOADED, payload: { attending, meets, profile } })
                // user authed and ready
                yield put({ type: AUTH_SUCCESS })
            } catch (e) {
                console.log(e, 'error creating new user')
            }
        } else {
            yield put({ type: USER_DATA_LOADED, payload: userData })
            yield put({ type: AUTH_SUCCESS })
        }

    } else if (authType === 'social') {

        if (!userData) {
            const name = userDetails.name.split(' ')[0]

            let profileData: { name: string, email?: string } = {
                name
            }
            if (userDetails.email) {
                profileData = { ...profileData, email: userDetails.email }
            }
            const params = {
                uuid,
                profile: profileData,
                meets: [],
                attending: []
            }

            try {

                const createUserRes = yield call(createNewUser, params)
                console.log(createUserRes, '__USER-CREATED__')
                const { attending, meets, profile } = createUserRes.data.createUser
                // load current user details we have to store with action
                yield put({ type: USER_DATA_LOADED, payload: { attending, meets, profile } })
                // user authed and ready
                yield put({ type: AUTH_SUCCESS })
            } catch (e) {
                console.log(e)
            }
        } else {
            // load user profile
            yield put({ type: USER_DATA_LOADED, payload: userData })
            yield put({ type: AUTH_SUCCESS })

        }
    }
}
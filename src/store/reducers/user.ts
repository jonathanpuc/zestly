import { AUTH_SUCCESS, USER_DATA_LOADED } from '../actions/types'

interface IInitialState {
    attending: string[],
    meets: string[],
    profile: {
        name: string,
        location: string,
        age: string,
        bio: string,
        askMe: string,
        photo: string,
        email: string,
        profileUrl: string,
        instagramUrl: string
        seeking: string[]
        distance: string
    },
    auth: boolean
}

const initialState: IInitialState = {
    attending: [],
    meets: [],
    profile: {
        name: '',
        location: '',
        age: '',
        bio: '',
        askMe: '',
        photo: '',
        email: '',
        profileUrl: '',
        instagramUrl: '',
        seeking: [],
        distance: ''
    },
    auth: false
}

const reducer = (state: IInitialState = initialState, action: any) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                auth: true
            }
        case USER_DATA_LOADED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default reducer

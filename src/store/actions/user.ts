import { AUTH_SUCCESS, USER_DATA_LOADED } from './types'


// interface IUserPayload {
//     attending: string[],
//     meets: string[]
//     profile: {
//         age: string
//         askMe: string
//         bio: string
//         distance: string
//         email: string
//         instagramUrl: string
//         location: string
//         name: string
//         photo: string
//         profileUrl: string
//         seeking: string[]
//     }
// }

export const loadUser = (payload: any) => {
    return {
        type: USER_DATA_LOADED,
        payload
    }
}

export const authSuccess = () => {
    return {
        type: AUTH_SUCCESS
    }
}

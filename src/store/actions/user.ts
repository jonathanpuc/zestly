import { HANDLE_AUTH, USER_DATA_LOADED } from './types'


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

export const handleAuth = (authType: string) => {
    return {
        type: HANDLE_AUTH,
        payload: authType
    }
}

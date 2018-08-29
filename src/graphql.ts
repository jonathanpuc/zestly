export const CreateUser = `
mutation CreateUser(
    $uuid: String!
	$meets: [String]
	$attending: [String]
	$profile: UserProfileInput
 ) {
    createUser(input: {
        uuid: $uuid
        meets: $meets
        attending: $attending
        profile: $profile
    }) {
      uuid
      profile {
        name
        name
        location
        age
        bio
        askMe
        photo
        email
        profileUrl
        seeking
        instagramUrl
        distance
      }
      meets 
      attending
    }
  }
`

export const UpdateUser = `
mutation UpdateUser(
	$uuid: String!
	$profile: UserProfileInput
	$meets: [String]
	$attending: [String]
) {
    updateUser(input: {
        uuid: $uuid
        profile: $profile
        meets: $meets
        attending: $attending
    }) {
        profile {
            name
            name
            location
            age
            bio
            askMe
            photo
            email
            profileUrl
            seeking
            instagramUrl
            distance 
        }
        meets
        attending
    }
}
`

export const GetUser = `
query GetUser (
    $uuid: String!
) {
    getUser(uuid: $uuid) {
        profile {
            name
            name
            location
            age
            bio
            askMe
            photo
            email
            profileUrl
            seeking
            instagramUrl
            distance 
        }
        meets
        attending
    }
}
`

export const DeleteUser = `
mutation DeleteUser(
    $uuid: String!
) {
    deleteUser(input: {uuid: $uuid}) {
        uuid
        meets
        attending
    }
}
`

export const ListUsers = `
    query ListUsers(
        $limit: Int
        $nextToken: String
    ) {
        listUsers(limit: $limit, nextToken: $nextToken) {
            items {
                uuid
            }
            nextToken
        }
    }
`

// page cant be refreshed otherwise token becomes invaluuid
// const queryUsers = {
//     limit: 1,
//     // nextToken: "eyJ2ZXJzaW9uIjoxLCJ0b2tlbiI6IkFRSUNBSGcxTUkwMVp2Vj…KMWsxU1FvTmNZb3J4V2pwb3Zob3ByOFF0UWJRTWtFeUE9PSJ9"
// }

  // const deleteQ = {
  //   uuid: '3fa6c0e9-b81b-4dc3-b497-c48b26849632'
  // }
  // const queryUser = {
  //   uuid: '3fa6c0e9-b81b-4dc3-b497-c48b26849632'
  // }

  // const update = {
  //   uuid: '3fa6c0e9-b81b-4dc3-b497-c48b26849632',
  //   profile: {
  //     name: 'Fry',
  //     location: 'String',
  //     age: 'String',
  //     bio: 'String',
  //     askMe: 'String',
  //     photo: 'String',
  //     email: 'fry@gmail.com',
  //     profileUrl: 'String',
  //     seeking: [],
  //     instagramUrl: 'String',
  //     distance: 'String',
  //   },
  //   meets: ['smith and deli']
  // }

  // const user = {
  //   meets: [],
  //   attending: [],
  //   profile: {
  //     name: "Doug",
  //     location: "Fitzroy",
  //     age: "20",
  //     bio: "20",
  //     askMe: "20",
  //     photo: "20",
  //     email: "weirw@gmail.com",
  //     profileUrl: "20",
  //     seeking: ["20"],
  //     instagramUrl: "20",
  //     distance: "20",
  //   }
  // }
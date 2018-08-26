export const CreateUser = `
mutation CreateUser(
	$meets: [String]
	$attending: [String]
	$profile: UserProfileInput!
 ) {
    createUser(input: {
        meets: $meets
        attending: $attending
        profile: $profile
    }) {
      id
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
	$id: ID!
	$profile: UserProfileInput
	$meets: [String]
	$attending: [String]
) {
    updateUser(input: {
        id: $id
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
    $id: ID!
) {
    getUser(id: $id) {
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
    $id: ID!
) {
    deleteUser(input: {id: $id}) {
        id
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
                id
            }
            nextToken
        }
    }
`

// page cant be refreshed otherwise token becomes invalid
// const queryUsers = {
//     limit: 1,
//     // nextToken: "eyJ2ZXJzaW9uIjoxLCJ0b2tlbiI6IkFRSUNBSGcxTUkwMVp2Vj…KMWsxU1FvTmNZb3J4V2pwb3Zob3ByOFF0UWJRTWtFeUE9PSJ9"
// }

  // const deleteQ = {
  //   id: '3fa6c0e9-b81b-4dc3-b497-c48b26849632'
  // }
  // const queryUser = {
  //   id: '3fa6c0e9-b81b-4dc3-b497-c48b26849632'
  // }

  // const update = {
  //   id: '3fa6c0e9-b81b-4dc3-b497-c48b26849632',
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
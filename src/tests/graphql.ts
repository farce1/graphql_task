export const getUsersWithPosts = `
    query users {
        users {
            name
            posts {
                name
            }
        }
    }
`

export const getUsersWithNameAndSurname = `
    query users {
        users {
            name
            surname
        }
    }
`

export const getUsersAndPostsWithUser = `
    query users {
        users {
            name
            posts {
                name
                user {
                    name
                }
            }
        }
    }
`

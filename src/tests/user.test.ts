import { request } from 'graphql-request'
import { UsersAndPostsWithUser } from '../mocks/UsersAndPostsWithUser'
import { UsersWithNameAndSurname } from '../mocks/UsersWithNameAndSurname'
import { UsersWithPosts } from '../mocks/UsersWithPosts'
import {
  getUsersWithNameAndSurname,
  getUsersWithPosts,
  getUsersAndPostsWithUser
} from './graphql'
import { getConfig } from './helpers'

const config = getConfig()
test.each([
  ['users with posts', getUsersWithPosts, UsersWithPosts],
  ['users with name and surname',getUsersWithNameAndSurname, UsersWithNameAndSurname],
  ['users with posts and username',getUsersAndPostsWithUser, UsersAndPostsWithUser]
])('should return %p', async (_, graphqlQuery, mockedData) => {
  const data: any = await request(config.url, graphqlQuery)

  expect(data).toMatchObject(mockedData)
})

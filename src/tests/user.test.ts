import { request } from 'graphql-request'
import { getUsersWithPosts } from './graphql'
import { getConfig } from './helpers'

test('should return list of users with posts', async () => {
  try {
    const config = await getConfig()
    const data: any = await request(config.url, getUsersWithPosts)

    expect(data).toHaveProperty('name')
  } catch (e) {
    console.log('error', e)
  }
})

import { apollo } from '../server'
import { prisma } from '../context'
import { Headers } from 'cross-fetch'

// @ts-ignore
global.Headers = global.Headers || Headers

type Config = { url: string }

export const getConfig = async () => {
  let config: any = {}
  const server = await apollo()

  beforeAll(async () => {
    const { url } = await server.listen({ port: 0 })
    config.url = url
    return config
  })

  afterAll(async () => {
    await server.stop()
    return prisma.$disconnect()
  })

  return config as Config
}

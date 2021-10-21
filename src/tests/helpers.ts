import { apollo } from '../server'
import { prisma } from '../context'
import { Headers } from 'cross-fetch'

// @ts-ignore
global.Headers = global.Headers || Headers

type Config = { url: string }

export const getConfig = () => {
  let config: any = {}
  let server: any

  beforeAll(async () => {
    server = await apollo()
    const { url } = await server.listen({ port: 8001 })
    config.url = url
    return config
  })

  afterAll(async () => {
    server.stop()
    return prisma.$disconnect()
  })

  return config as Config
}

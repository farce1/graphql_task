import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { context } from './context'
import { UserResolver } from './resolvers/UserResolver'
import { PostResolver } from './resolvers/PostResolver'

export const apollo = async () => {
  const schema = await tq.buildSchema({
    resolvers: [UserResolver, PostResolver]
  })

  return new ApolloServer({ schema, context })
}

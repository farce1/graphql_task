import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { context } from './context'
import { UserResolver } from './resolvers/UserResolver'
import { PostResolver } from './resolvers/PostResolver'

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [UserResolver, PostResolver]
  })

  new ApolloServer({ schema, context: context }).listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at: http://localhost:4000`)
  )
}

app()

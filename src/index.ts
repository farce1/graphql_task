import 'reflect-metadata'
import * as tq from 'type-graphql'
import { HelloWorldResolver } from './resolvers/HelloWorldResolver'
import { ApolloServer } from 'apollo-server'
import { context } from './context'

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [HelloWorldResolver]
  })

  new ApolloServer({ schema, context: context }).listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at: http://localhost:4000`)
  )
}

app()

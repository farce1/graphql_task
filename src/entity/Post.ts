import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import { User } from './User'

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number

  @Field(() => String)
  name: string

  @Field(() => String, { nullable: true })
  description: string | null

  @Field(() => User, { nullable: true })
  user?: User | null
}

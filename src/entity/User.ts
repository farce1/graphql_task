import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import { Post } from './Post'

@ObjectType()
export class User {
  @Field(() => ID)
  id: number

  @Field(() => String)
  name: string

  @Field(() => String)
  surname: string

  @Field(() => [Post], { nullable: true })
  posts?: [Post] | null
}

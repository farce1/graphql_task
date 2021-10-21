import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import { Post } from './Post'

@ObjectType()
export class User {
  @Field(() => ID)
  id: number

  @Field()
  name: string

  @Field()
  surname: string

  @Field(() => [Post], { nullable: true })
  posts?: [Post] | null
}

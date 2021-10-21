import 'reflect-metadata'
import { User, Post } from 'entity'
import {
  Resolver,
  Query,
  Arg,
  Ctx,
  FieldResolver,
  Root,
  Field
} from 'type-graphql'
import { Context } from '../context'

class UserUniqueInput {
  @Field({ nullable: true })
  id: number

  @Field({ nullable: true })
  name: string
}

@Resolver(User)
export class UserResolver {
  @FieldResolver()
  async posts(@Root() user: User, @Ctx() ctx: Context): Promise<Post[]> {
    return ctx.prisma.user
      .findUnique({
        where: {
          id: user.id
        }
      })
      .posts()
  }

  @Query(() => [User])
  async allUsers(@Ctx() ctx: Context) {
    return ctx.prisma.user.findMany()
  }

  @Query(() => [Post], { nullable: true })
  async draftsByUser(
    @Arg('userUniqueInput') userUniqueInput: UserUniqueInput,
    @Ctx() ctx: Context
  ) {
    return ctx.prisma.user.findUnique({
      where: {
        id: userUniqueInput.id || undefined
      }
    })
  }
}

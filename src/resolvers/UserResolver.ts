import 'reflect-metadata'
import { Post } from '../entity/Post'
import { User } from '../entity/User'
import { Resolver, Query, Ctx, FieldResolver, Root } from 'type-graphql'
import { Context } from '../context'

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async users(@Ctx() ctx: Context) {
    return ctx.prisma.user.findMany()
  }

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
}

import 'reflect-metadata'
import { Post } from '../entity/Post'
import { User } from '../entity/User'
import {
  Resolver,
  Query,
  Arg,
  Ctx,
  FieldResolver,
  Root,
  Int
} from 'type-graphql'
import { Context } from 'types'

@Resolver(Post)
export class PostResolver {
  @FieldResolver()
  user(@Root() post: Post, @Ctx() ctx: Context): Promise<User | null> {
    return ctx.prisma.post
      .findUnique({
        where: {
          id: post.id
        }
      })
      .user()
  }

  @Query(() => Post, { nullable: true })
  async postById(@Arg('id') id: number, @Ctx() ctx: Context) {
    return ctx.prisma.post.findUnique({
      where: { id }
    })
  }

  @Query(() => [Post])
  async feed(
    @Arg('searchString', { nullable: true }) searchString: string,
    @Arg('skip', () => Int, { nullable: true }) skip: number,
    @Arg('take', () => Int, { nullable: true }) take: number,
    @Ctx() ctx: Context
  ) {
    const or = searchString
      ? {
          OR: [
            { name: { contains: searchString } },
            { description: { contains: searchString } }
          ]
        }
      : {}

    return ctx.prisma.post.findMany({
      where: {
        ...or
      },
      take: take || undefined,
      skip: skip || undefined
    })
  }
}

import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'John',
    surname: 'Doe',
    posts: {
      create: [
        {
          name: 'hello world',
          description: 'https://hey.com'
        }
      ]
    }
  },
  {
    name: 'Maria',
    surname: 'Airam',
    posts: {
      create: [
        {
          name: 'hello world',
          description: 'https://hey.com'
        }
      ]
    }
  },
  {
    name: 'Henry',
    surname: 'Smith',
    posts: {
      create: [
        {
          name: 'GitHub',
          description: 'https://www.github.com'
        },
        {
          name: 'YouTube',
          description: 'https://youtube.com/youtube'
        }
      ]
    }
  }
]

async function main() {
  console.log(`Generator started ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Generator finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

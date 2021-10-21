import { apollo } from './server'

const PORT = process.env.PORT || 4000

const app = async () => {
  const api = await apollo()

  api.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at: http://localhost:${PORT}`)
  )
}

app()

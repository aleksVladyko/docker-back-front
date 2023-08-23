import Fastify from 'fastify'
import fastifyEnv from '@fastify/env'

const fastify = Fastify({
  logger: true,
})

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'string',
      default: process.env.PORT,
    },
  },
}
const options = {
  confKey: 'config', // optional, default: 'config'
  schema,
  data: process.env, // optional, default: process.env
  dotenv: true,
}
const initialize = async () => {
  fastify.register(fastifyEnv, options)
  await fastify.after()
}

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})
const start = async () => {
  try {
    await fastify.ready()
    await fastify.listen(process.env.PORT, process.env.HOST)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
initialize()
start()

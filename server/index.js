import Fastify from 'fastify'
import fastifyEnv from '@fastify/env'
import userRoutes from './routes/user.routes'

const fastify = Fastify({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty',
    },
  },
})

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'string',
      default: process.env.PORT || 3000,
    },
  },
}
const options = {
  confKey: 'config',
  schema,
  data: process.env,
  dotenv: true,
}
const initialize = async () => {
  fastify.register(fastifyEnv, options)
  await fastify.after()
}

// fastify.get('/', options, async (request, reply) => {
//   request.log.info('Some info about the current request')
//   reply.send({ hello: 'world' })
// })
fastify.register(userRoutes, { prefix: '/api/v1/users' })

const start = async () => {
  try {
    await fastify.ready()
    fastify.listen({ port: process.env.PORT, host: process.env.HOST })
    fastify.log.info(
      `Server is running on port ${fastify.server.address().port}`,
    )
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
initialize()
start()

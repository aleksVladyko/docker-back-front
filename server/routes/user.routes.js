import userController from '../controllers/user.controllers.js'

async function routes(fastify) {
  fastify.get('/', userController.getAllUsers)
  fastify.get('/:id', userController.getUserById)
  fastify.post('/', userController.createUser)
  fastify.put('/:id', userController.updateUser)
  fastify.delete('/:id', userController.deleteUser)
}
export default routes

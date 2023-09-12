import User from '../models/user.model.js'

async function getAllUsers(request, reply) {
  const users = await User.find()
  try {
    reply.send('Not implemented yet')
  } catch (error) {
    reply.status(500).send()
  }
}
async function getUserById(request, reply) {
  const user = await User.findById(req.params.id)
  try {
    reply.send('Not implemented yet')
  } catch (error) {
    reply.status(500).send()
  }
}
async function createUser(request, reply) {
  try {
    reply.send('Not implemented yet')
  } catch (error) {
    reply.status(500).send()
  }
}
async function updateUser(request, reply) {
  try {
    reply.send('Not implemented yet')
  } catch (error) {
    reply.status(500).send()
  }
}

async function deleteUser(request, reply) {
  try {
    reply.send('Not implemented yet')
  } catch (error) {
    reply.status(500).send()
  }
}
export default { getAllUsers, getUserById, createUser, updateUser, deleteUser }

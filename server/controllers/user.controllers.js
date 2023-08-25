import User from '../models/user.model'

async function getAllUsers(request, reply) {
  try {
    reply.send('Not implemented yet')
  } catch (error) {
    reply.status(500).send(err)
  }
}
async function getUserById(request, reply) {
  try {
    reply.send('Not implemented yet')
  } catch (error) {
    reply.status(500).send(err)
  }
}
async function createUser(request, reply) {
  try {
    reply.send('Not implemented yet')
  } catch (error) {
    reply.status(500).send(err)
  }
}
async function updateUser(request, reply) {
  try {
    reply.send('Not implemented yet')
  } catch (error) {
    reply.status(500).send(err)
  }
}

async function deleteUser(request, reply) {
  try {
    reply.send('Not implemented yet')
  } catch (error) {
    reply.status(500).send(err)
  }
}
export default { getAllUsers, getUserById, createUser, updateUser, deleteUser }

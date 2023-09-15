import User from '../models/user.model.js'

async function getAllUsers(req, reply) {
  try {
    const users = await User.find()
    reply.send(users)
  } catch (error) {
    reply.status(500).send()
  }
}
async function getUserById(req, reply) {
  try {
    const user = await User.findById(req.params.id)
    reply.send(user)
  } catch (error) {
    reply.status(500).send()
  }
}
async function createUser(req, reply) {
  try {
    const user = new User(req.body)
    const result = await user.save()
    reply.send(result)
  } catch (error) {
    reply.status(500).send()
  }
}
async function updateUser(req, reply) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    reply.send(user)
  } catch (error) {
    reply.status(500).send()
  }
}

async function deleteUser(req, reply) {
  try {
    await User.findByIdAndDelete(req.params.id)
    reply.status(203).send('')
  } catch (error) {
    reply.status(500).send()
  }
}
export default { getAllUsers, getUserById, createUser, updateUser, deleteUser }

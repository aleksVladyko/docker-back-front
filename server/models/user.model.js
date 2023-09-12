import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'User', 'Guest'],
    default: 'Guest',
  },
})

const User = mongoose.model('User', UserSchema)

export default User

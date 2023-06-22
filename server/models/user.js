import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      minLength: [8, 'Username must be at least 8 characters long'],
      trim: true,
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      minLength: [8, 'Password must be at least 8 characters long'],
      required: [true, 'Password is required'],
    },
  },
  {
    timestamps: true,
  }
);

export default model('User', userSchema);

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
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: [8, 'Password must be at least 8 characters long'],
      required: [true, 'Password is required'],
    },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    profile_image: { type: String },
    phone: { type: String, trim: true },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  },
  {
    timestamps: true,
  }
);

export default model('User', userSchema);

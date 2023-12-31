import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
  {
    content: {
      type: String,
      trim: true,
      required: true,
    },
    user: [],
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    dislikes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

export default model('Comment', commentSchema);

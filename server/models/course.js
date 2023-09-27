import { Schema, model } from 'mongoose';

const courseSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    total_lessons: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    lessons: [
      {
        lesson: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          trim: true,
          required: true,
        },
        video: {
          type: String,
          required: true,
        },
        duration: {
          type: String,
          required: true,
        },
      },
    ],
    cover: {
      type: String,
      required: true,
    },
    transcript: {
      type: String,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  {
    timestamps: true,
  }
);

export default model('Course', courseSchema);

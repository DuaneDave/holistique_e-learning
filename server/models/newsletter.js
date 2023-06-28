import { Schema, model } from 'mongoose';

const newsletterSchema = Schema(
  {
    email: {
      type: String,
      required: [true, 'Email can not be blank'],
    },
  },
  {
    timestamps: true,
  }
);

export default model('newsletters', newsletterSchema)

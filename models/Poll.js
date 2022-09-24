import mongoose from "mongoose";
const poleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  votes: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      vote: {
        type: String,
        required: true,
        default: null,
      },
    },
  ],
  createdAt: { type: String, required: true },
});

const Poll = mongoose.models.Poll || mongoose.model("Poll", poleSchema);

export default Poll;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  userPhoto: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const User = mongoose.model("User", userSchema);

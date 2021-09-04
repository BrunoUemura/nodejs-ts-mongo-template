import mongoose from "mongoose";
import { User } from "../models/User";

export class UserService {
  constructor() {
    mongoose.connect(process.env.MONGO_URL, {
      authSource: "admin",
      auth: {
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASS,
      },
    });
  }

  async getUsers() {
    return await User.find();
  }

  async getUser(id: string) {
    return await User.findById(id);
  }

  async createUser(user: any) {
    return await User.create(user);
  }

  async updateUser(id: string, updatedUser: any) {
    const userExist = await User.findById(id);
    if (!userExist) {
      throw new Error(`No user with id: ${id}`);
    }

    await User.findByIdAndUpdate(id, updatedUser, { new: true });
    return updatedUser;
  }

  async deleteUser(id) {
    const userExist = await User.findById(id);
    if (!userExist) {
      throw new Error(`No user with id: ${id}`);
    }

    await User.findOneAndDelete(id);
    return id;
  }
}

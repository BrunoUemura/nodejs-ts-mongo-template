import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.messge });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.messge });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No user with id: ${id}`);
  }

  const updatedUser = { ...user, _id: id };

  await User.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id }: any = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No user with id: ${id}`);
  }

  try {
    await User.findOneAndDelete(id);
    res.status(200).json({ message: `User ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

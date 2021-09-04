import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  static async getUsers(req: Request, res: Response) {
    const userService = new UserService();

    try {
      const users = await userService.getUsers();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(404).json({ message: error.messge });
    }
  }

  static async getUser(req: Request, res: Response) {
    const userService = new UserService();
    const { id } = req.params;

    try {
      const user = await userService.getUser(id);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(404).json({ message: error.messge });
    }
  }

  static async createUser(req: Request, res: Response) {
    const userService = new UserService();
    const user = req.body;

    try {
      await userService.createUser(user);
      res.status(201).json({ message: "User created" });
    } catch (error: any) {
      res.status(409).json({ message: error.message });
    }
  }

  static async updateUser(req: Request, res: Response) {
    const userService = new UserService();
    const { id } = req.params;
    const user = req.body;
    const updatedUser = { ...user, _id: id };

    try {
      const user = await userService.updateUser(id, updatedUser);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(409).json({ message: error.message });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    const userService = new UserService();
    const { id }: any = req.params;

    try {
      await userService.deleteUser(id);
      res.status(200).json({ message: `User ${id} deleted successfully` });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

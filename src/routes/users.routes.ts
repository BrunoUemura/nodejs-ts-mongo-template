import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const users = Router();

users.get("/users", UserController.getUsers);
users.get("/users/:id", UserController.getUser);
users.post("/users", UserController.createUser);
users.put("/users/:id", UserController.updateUser);
users.delete("/users/:id", UserController.deleteUser);

import { Router } from "express";
import { users } from "./users.routes";

export const routes = Router();

routes.get("/", (_, res) => {
  res.send({ message: "You are in the backend API" });
});

routes.use("/api/v1", users);

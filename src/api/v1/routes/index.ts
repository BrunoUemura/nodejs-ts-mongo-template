import { Router } from "express";
import users from "./users.routes";

const router = Router();

router.get("/", (_, res) => {
  res.send({ message: "You are in the backend API" });
});

router.use("/api/v1", users);

export default router;

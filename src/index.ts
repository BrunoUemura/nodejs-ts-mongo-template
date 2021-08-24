import express from "express";
import cors from "cors";
import logger from "morgan";
import routes from "./api/v1/routes";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const mongoDBHost: string = process.env.DB_URL || "mongodb://localhost:27017";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(routes);

mongoose
  .connect(mongoDBHost, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

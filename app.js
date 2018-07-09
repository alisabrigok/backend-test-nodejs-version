import express from "express";
import mongoose from "mongoose";
import config from "./config";
import indexRoute from "./routes";

mongoose.connect(config.getDbConnection());

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));

app.use(indexRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server is up and running");
});

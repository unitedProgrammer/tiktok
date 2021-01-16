import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
import Videos from "./dbModel.js";

const connection_url =
  "mongodb+srv://admin:HtCHnxsfjJlEFcqA@cluster0.0aq2b.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeaders("Acces-Control-Allow-Origin", "*"),
    res.setHeaders("Acces-Control-Allow-Origin", "*"),
    next();
});

app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`listening on localhost:${port}`));

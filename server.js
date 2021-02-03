//const express = require("express");
//const mongoose = require("mongoose");

import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
import Videos from "./dbModel.js";

const app = express();
const port = process.env.PORT || 9003;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

const connection_url =
  "mongodb+srv://admin:mF8bQk1YohEjeYhK@cluster0.0aq2b.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Videos.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

/*app.post("/v1/posts", async (req, res) => {
  Videos.update(likes + 1); //создание сообщения с полями nick и message. Можно и newMessage.nick = req.body.nick
  await Videos.save(); //сохранение
  res.status(201).send(data); //201 - Entity Created Code. Возвращаем запись из бд с _id
});
*/
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

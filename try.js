import { houses } from "./mongoCollections.js";
import "dotenv/config";
import Express from "express";
import cors from "cors";
import axios from "axios";

const express = Express();

const housesCol = await houses();
const house1 = await housesCol.findOne();
console.log(await housesCol.findOne());

express.use(cors());
express.use("/house", async (req, res) => {
  // let e;
  // try {
  //   await axios.get("https://google.com");
  //   await axios.get("http://frontend:80");
  // } catch (error) {
  //   e = error;
  // }

  res.json([process.env, house1]);
  // res.json([e, house1, process.env]);
});

express.listen(3000, () => {
  console.log("running on http://localhost:3000");
});

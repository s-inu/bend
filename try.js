import { houses } from "./mongoCollections.js";
import "dotenv/config";
import Express from "express";
import cors from "cors";

const express = Express();

const housesCol = await houses();
const house1 = await housesCol.findOne();
// console.log(await housesCol.findOne());

express.use(cors());
express.use("/", (req, res) => res.json(house1));

express.listen(3000, () => {
  console.log("running on http://localhost:3000");
});

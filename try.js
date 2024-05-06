import { houses } from "./mongoCollections.js";
import "dotenv/config";

const housesCol = await houses();
console.log(await housesCol.findOne());

// You will need to change the DB name to match the required DB name in the assignment specs!
import "dotenv/config";
export const mongoConfig = {
  serverUrl: process.env.MONGOSERVERURL,
  database: process.env.DBNAME,
};

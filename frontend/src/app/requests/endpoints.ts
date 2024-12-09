import { configDotenv } from "dotenv";
configDotenv();
export const root = "http://localhost:4000";

export const database = root + "/db";

export const newUser = database + "/new";

import { Request } from "express";
import Users from "./models/Users";
import path from "path";

export const __prod__ = process.env.NODE_ENV === "production";
export const __working_dir__ = path.join(__dirname, "..");
export interface MyContext {
   req: Request;
   user?: Users;
}

import { Request } from "express";
import Users from "./models/Users";

export const __prod__ = process.env.NODE_ENV === "production";

export interface MyContext {
   req: Request;
   user?: Users;
}

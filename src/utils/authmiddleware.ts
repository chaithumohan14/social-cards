import { verify } from "jsonwebtoken";
import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../globals";
import Users from "../models/Users";

export const checkAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
   const authheader = context.req.headers.authorization?.split(" ");
   if (authheader && authheader[1] && authheader[0] === "Bearer") {
      const decoded = verify(authheader[1], process.env.JWT_SECRET!);
      context.user = await Users.findById(decoded as string);
      if (!context.user) return null;
   } else {
      return null;
   }
   return next();
};

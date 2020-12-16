import validator from "validator";
import { hash, verify } from "argon2";
import { sign } from "jsonwebtoken";
import {
   Arg,
   Ctx,
   Mutation,
   Query,
   Resolver,
   UseMiddleware,
} from "type-graphql";
import { MyContext } from "../globals";
import Users from "../models/Users";
import { checkAuth } from "../utils/authmiddleware";

@Resolver((_of) => Users)
class UserResolver {
   @Query(() => Users)
   @UseMiddleware(checkAuth)
   async profile(
      @Ctx() { user }: MyContext
   ): Promise<Users | null | undefined> {
      return user;
   }

   @Mutation(() => Users)
   async register(
      @Arg("email") email: string,
      @Arg("username") username: string,
      @Arg("password") password: string
   ) {
      if (!validator.isEmail(email)) return null;
      if (!password || password.trim().length < 8) return null;
      let newuser = Users.create({
         email,
         username,
         password: await hash(password),
         posts: [],
      });
      newuser = await newuser.save();
      newuser.token = sign(newuser.id, process.env.JWT_SECRET!);
      return newuser;
   }

   @Mutation(() => Users)
   async login(@Arg("email") email: string, @Arg("password") password: string) {
      if (!validator.isEmail(email)) return null;
      let newuser = await Users.getUserByEmail(email);
      if (!newuser) return null;
      if (await verify(newuser?.password, password)) {
         newuser.token = sign(newuser.id, process.env.JWT_SECRET!);
         return newuser;
      }
   }

   @Mutation(() => Users)
   @UseMiddleware(checkAuth)
   async updatePassword(
      @Arg("password") password: string,
      @Ctx() { user }: MyContext
   ) {
      if (!password || password.trim().length < 8) return null;
      user!.password = await hash(password);
      user = await user?.save();
      return user;
   }

   @Mutation(() => Users)
   @UseMiddleware(checkAuth)
   async updateEmail(@Arg("email") email: string, @Ctx() { user }: MyContext) {
      if (!validator.isEmail(email)) return null;
      user!.email = email;
      user = await user!.save();
      return user;
   }

   @Mutation(() => Users)
   @UseMiddleware(checkAuth)
   async updateUsername(
      @Arg("username") username: string,
      @Ctx() { user }: MyContext
   ) {
      if (username.trim().length === 0 || username.length <= 5) return null;
      user!.username = username;
      user = await user?.save();
      return user;
   }

   @Mutation(() => Boolean)
   @UseMiddleware(checkAuth)
   async deleteUser(@Ctx() { user }: MyContext) {
      if (!user) return null;
      user = await user.remove();
      if (user.id) return false;
      else return true;
   }
}

export default UserResolver;

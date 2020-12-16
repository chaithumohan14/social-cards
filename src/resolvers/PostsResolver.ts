import path from "path";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import {
   Arg,
   Ctx,
   Mutation,
   PubSub,
   Query,
   Resolver,
   Subscription,
   UseMiddleware,
   PubSubEngine,
   Root,
} from "type-graphql";
import { v4 } from "uuid";
import { MyContext, __working_dir__ } from "../globals";
import Posts from "../models/Posts";
import { checkAuth } from "../utils/authmiddleware";
import { uploadfile } from "../utils/fileUpload";

@Resolver((_of) => Posts)
class PostsResolver {
   @Query(() => [Posts])
   @UseMiddleware(checkAuth)
   async getPosts(@Ctx() { user }: MyContext) {
      if (!user) return null;
      return user.posts;
   }

   @Query(() => [Posts])
   async getAllPosts() {
      return await Posts.find({ relations: ["user"] });
   }

   @Mutation(() => Posts)
   @UseMiddleware(checkAuth)
   async addPost(
      @Arg("caption") caption: string,
      @Arg("pic", () => GraphQLUpload) pic: FileUpload,
      @Ctx() { user }: MyContext,
      @PubSub() pubsub: PubSubEngine
   ) {
      if (!user) return null;
      const uniqueId = v4();
      let newpost = Posts.create({
         caption,
         uniqueId: `${uniqueId}.${pic.filename.split(".")[1]}`,
         user,
      });
      const uploaded = await uploadfile(
         pic,
         path.join(
            __working_dir__,
            "public",
            "posts",
            `${uniqueId}.${pic.filename.split(".")[1]}`
         )
      );

      if (uploaded) {
         console.log("pots");
         await newpost.save();
         pubsub.publish("POSTS", newpost);
         return newpost;
      } else return null;
   }

   @Subscription(() => Posts, {
      topics: "POSTS",
   })
   async subPosts(@Root() post: Posts) {
      return post;
   }
}

export default PostsResolver;

import express from "express";
import next from "next";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import colors from "colors";
import { parse } from "url";
import { ApolloServer } from "apollo-server-express";
import { graphqlUploadExpress } from "graphql-upload";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { MyContext, __prod__ } from "./globals";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import UserResolver from "./resolvers/UserResolver";

const app: express.Application = express();
const nextserver = next({ dev: !__prod__ });
const nexthandler = nextserver.getRequestHandler();

dotenv.config();

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "static")));
app.use(
   graphqlUploadExpress({
      maxFieldSize: 1000000,
      maxFileSize: 1000000,
      maxFiles: 3,
   })
);

const main = async () => {
   const schema = await buildSchema({
      validate: false,
      resolvers: [UserResolver],
   });

   const apolloserver = new ApolloServer({
      schema,
      context: ({ req }: ExpressContext): MyContext => {
         let user;
         return {
            req,
            user,
         };
      },
      uploads: false,
   });
   apolloserver.applyMiddleware({ app, cors: false, path: "/api" });
   await nextserver.prepare();
   app.listen(process.env.PORT, async () => {
      await createConnection();
      console.log(
         colors.green(`Server running on http://localhost:${process.env.PORT}`)
      );
   });

   app.get("*", (req, res) => {
      return nexthandler(req, res, parse(req.url, true));
   });
};

main();

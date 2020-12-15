import { FileUpload } from "graphql-upload";
import { createWriteStream } from "fs";

const uploadfile = async (
   { createReadStream }: FileUpload,
   location: string
): Promise<boolean> => {
   return new Promise((resolve, reject) => {
      return createReadStream()
         .pipe(createWriteStream(location))
         .on("finish", () => resolve(true))
         .on("error", () => reject(true));
   });
};

export { uploadfile };

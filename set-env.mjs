import { writeFile } from "fs";
// Configure Angular `environment.ts` file path
const targetPath = "./src/environments/environment.ts";
// Load node modules
import "colors";
import dotenv from "dotenv";
dotenv.config();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
  production: "${process.env.PRODUCTION}",
  firebase: {
    apiKey: "${process.env.API_KEY}",
    authDomain: "${process.env.AUTH_DOMAIN}",
    databaseURL: "${process.env.DB_URL}",
    projectId: "${process.env.PROJECT_ID}",
    storageBucket: "${process.env.BUCKET}",
    messagingSenderId: "${process.env.MSG_SENDER}",
    appId: "${process.env.APP_ID}"
  }
};`;

writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      `Angular environment.ts file generated correctly at ${targetPath} \n`
        .magenta
    );
  }
});

import * as dotenv from "dotenv";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";

dotenv.config();
const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`✅ALL Finished!`);
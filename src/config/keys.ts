import { readFileSync } from "fs";
import { importPKCS8, importSPKI } from "jose";
import "dotenv/config";

let privateKey: CryptoKey, publicKey: CryptoKey;

export async function getPrivateKey() {
  if (!privateKey) {
    const path = process.env.PRIVATE_KEY_PATH;
    if (path) {
      const pem = readFileSync(path, "utf-8");
      privateKey = await importPKCS8(pem, "RS256");
    }
  }
  return privateKey;
}

export async function getPublicKey() {
  if (!publicKey) {
    const path = process.env.PUBLIC_KEY_PATH;
    if (path) {
      const pem = readFileSync(path, "utf-8");
      publicKey = await importSPKI(pem, "RS256");
    }
  }
  return publicKey;
}

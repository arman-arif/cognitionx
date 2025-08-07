import { createHash } from "crypto";

export function md5(str) {
  return createHash("md5").update(str).digest("hex");
}

export function hashPassword(email, password) {
  return md5(email + password);
}

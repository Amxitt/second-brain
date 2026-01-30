export const JWT_PASSWORD = process.env.JWT_PASSWORD as string;
export const MONGO_URL = process.env.MONGO_URL as string;
console.log(JWT_PASSWORD)
if (!JWT_PASSWORD) {
  throw new Error("JWT_PASSWORD is not defined");
}
if (!MONGO_URL) {
  throw new Error("MONGO_URL is missing");
}

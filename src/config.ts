export const JWT_PASSWORD = process.env.JWT_PASSWORD;
console.log(JWT_PASSWORD)
if (!JWT_PASSWORD) {
  throw new Error("JWT_PASSWORD is not defined");
}

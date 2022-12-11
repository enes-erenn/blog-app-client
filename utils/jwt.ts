import { SignJWT, jwtVerify } from "jose";

export const verify = async (token: string, secret: string): Promise<any> => {
  const sec = new TextEncoder().encode(secret);

  const { payload } = await jwtVerify(token, sec);
  // run some checks on the returned payload, perhaps you expect some specific values

  // if its all good, return it, or perhaps just return a boolean
  return payload;
};

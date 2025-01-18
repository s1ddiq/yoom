"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;



export const tokenProvider = async () => {
  try {
    const user = await currentUser();

    if (!user) throw new Error("User is not authenticated");
    if (!apiKey) throw new Error("No API key provided");
    if (!apiSecret) throw new Error("No API secret provided");

    const client = new StreamClient(apiKey, apiSecret);

    const exp = Math.floor(Date.now() / 1000) + 60 * 60; // 1 hour expiration

    const token = client.generateUserToken({
      user_id: user.id,  // user ID
      exp: exp,           // expiration time
    });

    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Failed to generate token");
  } finally {
    throw new Error("Token wasn't generated, :)")
  }
};

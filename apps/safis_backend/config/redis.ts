import { createClient } from "redis";
import { REDIS_URL } from "./env.ts";

const client = createClient({
    url: REDIS_URL
});

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

export default client;

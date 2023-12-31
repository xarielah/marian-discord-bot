import { type ClientOptions, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { clientLogger } from "../utils/util";
// Required to load .env file.
dotenv.config();

/**
 * Bot main configuration object.
 */
export const botConfig = {
  token: process.env.BOT_TOKEN || "",
  clientId: process.env.BOT_CLIENT_ID || "",
  clientSecret: process.env.BOT_CLIENT_SECRET || "",
  guildId: process.env.BOT_SERVER_ID || "",
  appId: process.env.BOT_APP_ID || "",
};

clientLogger(JSON.stringify(botConfig, null, 2));

/**
 * Client options for the Client Discord bot class.
 * Intents are required to pick which events are received/allowed from the server.
 * @see https://discord.js.org/#/docs/main/stable/typedef/ClientOptions
 * @see https://discord.com/developers/docs/topics/gateway#list-of-intents
 */
export const clientOptions: ClientOptions = {
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
};

export type BotConfig = typeof botConfig;

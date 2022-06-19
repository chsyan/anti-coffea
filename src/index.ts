import { Client, Intents } from "discord.js";
import guildMemberAddListener from "./listeners/guild-member-add";
import ready from "./listeners/ready";
import guildMemberUpdateListener from './listeners/guild-member-update';

const token = process.env.DISCORD_TOKEN;

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ]
});

ready(client);
guildMemberAddListener(client);
guildMemberUpdateListener(client);
client.login(token);

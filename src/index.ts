import { Client, Intents } from "discord.js";
import guildMemberAddListener from "./listeners/guild-member-add";
import guildMemberUpdateListener from './listeners/guild-member-update';
import ready from "./listeners/ready";

require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
if (token) {
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

} else {
  console.log('No token found');
}

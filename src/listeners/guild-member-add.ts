import { Client, GuildMember } from "discord.js";
import handleMember from "../handle-member";
import log from "../log";

const guildMemberAddListener = async (client: Client) => {
  client.on("guildMemberAdd", async (member: GuildMember) => {
    log(
      member.user.username +
        " was added to the to the guild: " +
        member.guild.name
    );
    if (!(await handleMember(member))) {
      log(member.user.username + " does not require a nickname enforcement");
    }
  });
};

export default guildMemberAddListener;

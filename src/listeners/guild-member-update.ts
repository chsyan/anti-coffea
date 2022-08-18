import { Client, GuildMember } from "discord.js";
import handleMember from "../handle-member";
import log from "../log";

const guildMemberUpdateListener = async (client: Client) => {
  client.on("guildMemberUpdate", async (_oldMember, newMember: GuildMember) => {
    log(
      newMember.user.username +
        " was updated in the guild: " +
        newMember.guild.name
    );
    if (!(await handleMember(newMember))) {
      log(newMember.user.username + " does not require a nickname enforcement");
    }
  });
};

export default guildMemberUpdateListener;

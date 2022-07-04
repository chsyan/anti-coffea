import { GuildMember } from 'discord.js';
import log from './log';

const handleMember = async (member: GuildMember) => {
  try {
    const names: JSON = require('../names.json');
    if (member.moderatable) {
      for (const [key, value] of Object.entries(names)) {
        const nickname = member.nickname;
        if (key === member.id && nickname !== value) {
          console.log("Matched");
          await member.setNickname(value);
          log('Set nickname for ' + member.user.username + ' from ' + nickname + ' to ' + value);
          break;
        }
      }
    } else {
      log(member.user.username + ' is not moderatable');
    }
  } catch (e: unknown) {
    if (typeof e === "string") {
      log(e);
    } else if (e instanceof Error) {
      log(e.message);
    }
  }
};

export default handleMember;

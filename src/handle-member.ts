import { GuildMember } from 'discord.js';
import log from './log';

const handleMember = async (member: GuildMember) => {
  const names: JSON = require('../names.json');
  if (member.moderatable) {
    for (const [key, value] of Object.entries(names)) {
      if (key === member.id) {
        await member.setNickname(value);
        log('Set nickname for ' + member.user.username);
        break;
      }
    }
  } else {
    log(member.user.username + ' is not moderatable');
  }
};

export default handleMember;

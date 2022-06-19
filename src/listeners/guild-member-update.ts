import { Client, GuildMember } from 'discord.js';
import handleMember from '../handle-member';

const guildMemberUpdateListener = async (client: Client) => {
  client.on('guildMemberUpdate', (_oldMember, newMember: GuildMember) => {
    handleMember(newMember);
  });
};

export default guildMemberUpdateListener;

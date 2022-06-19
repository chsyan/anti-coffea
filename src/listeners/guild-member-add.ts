import { Client, GuildMember } from 'discord.js';
import handleMember from '../handle-member';

const guildMemberAddListener = async (client: Client) => {
  client.on('guildMemberAdd', (member: GuildMember) => {
    handleMember(member);
  });
};

export default guildMemberAddListener;
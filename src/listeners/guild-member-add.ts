import { Client, GuildMember } from 'discord.js';

const handleFetchMember = (member: GuildMember, nickname: string): void => {
  member.setNickname(nickname);
  console.log(member?.user.username);
}

const guildMemberAddListener = (client: Client): void => {
  client.on('guildMemberAdd', (member: GuildMember) => {
    if (member.id === '437825584144580619') {
      member.guild.members.guild.members.fetch(member.id).then(m => handleFetchMember(m, '23/100 Waifu IRL')).catch();
    }
  });
};

export default guildMemberAddListener;
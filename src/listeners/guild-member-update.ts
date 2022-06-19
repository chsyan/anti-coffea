import { Client, GuildMember } from 'discord.js';

const handleFetchMember = (member: GuildMember, nickname: string): void => {
  member.setNickname(nickname);
  console.log(member?.user.username);
}

const guildMemberUpdateListener = (client: Client): void => {
  client.on('guildMemberUpdate', (_oldMember, newMember: GuildMember) => {
    if (newMember.id === '220658400202063872') {
      newMember.guild.members.fetch(newMember.id).then(m => handleFetchMember(m, '23/100 Waifu IRL')).catch();
    }
  });
};

export default guildMemberUpdateListener;
const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
    name:"afiş",
    description: 'Afiş komutu.',
    type:1,
    options: [
      {
        name:"kullanıcı",
        description:"Afiş seçeneği.",
        type:6,
        required:true
    },
  
],
run: async(client, interaction) => {
    const { DiscordBanners } = require('discord-banners');
    const discordBanners = new DiscordBanners(client);
const target = interaction.options.getMember('kullanıcı')
const banner = await discordBanners.getBanner(target.user.id, { dynamic: true });
if (banner.includes('https')) {
    const embed = new EmbedBuilder()
    .setImage(banner)
    .setColor("#323338")
return interaction.reply({embeds: [embed]})
} else if (!banner.includes('https')) {
  return interaction.reply({ content: "• Bu kullanıcıda afiş bulunamadı."});
  }  

}
};
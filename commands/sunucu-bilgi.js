const { EmbedBuilder, Colors, ChannelType } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  name:"sunucu-bilgi",
  description:"Sunucu-Bilgi komutu.",
  type:1,
  options:[],
  
  run: async (client, interaction) => {
    const owner = interaction.guild.members.cache.get(
      interaction.guild.ownerId
    );
    const embed = new EmbedBuilder()
      .setAuthor({name: `${interaction.guild.name} | Bilgileri`})
      .addFields(
        {
          name: "Genel Görüş",
          value: `Kurucu: \`${owner.user.tag}\`\nBoost: \`${interaction.guild.premiumSubscriptionCount}\`\nBoost Aşaması: \`${interaction.guild.premiumTier}\`\n`,
          inline: true,
        },
        {
          name: "Diğerleri",
          value: `Roller: \`${
            interaction.guild.roles.cache.size
          }\`\nKanallar: \`${
            interaction.guild.channels.cache.size
          }\` - Text: \`${
            interaction.guild.channels.cache.filter(
              (x) => x.type === ChannelType.GuildText
            ).size
          }\` - Ses: \`${
            interaction.guild.channels.cache.filter(
              (x) => x.type === ChannelType.GuildVoice
            ).size
          }\` - Kategori: \`${
            interaction.guild.channels.cache.filter(
              (x) => x.type === ChannelType.GuildCategory
            ).size
          }\`\nÜyeler: \`${interaction.guild.members.cache.size}\``,
          inline: true,
        }
      )
      .setColor("#323338")
    interaction.reply({ embeds: [embed] });8
  },


};
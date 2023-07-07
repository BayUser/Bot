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
          name: "Owerview",
          value: `Owner: \`${owner.user.tag}\`\nBoosts: \`${interaction.guild.premiumSubscriptionCount}\`\nBoost Tier: \`${interaction.guild.premiumTier}\``,
          inline: true,
        },
        {
          name: "Other",
          value: `Roles: \`${
            interaction.guild.roles.cache.size
          }\`\nChannels: \`${
            interaction.guild.channels.cache.size
          }\` - Text: \`${
            interaction.guild.channels.cache.filter(
              (x) => x.type === ChannelType.GuildText
            ).size
          }\` - Voice: \`${
            interaction.guild.channels.cache.filter(
              (x) => x.type === ChannelType.GuildVoice
            ).size
          }\` - Category: \`${
            interaction.guild.channels.cache.filter(
              (x) => x.type === ChannelType.GuildCategory
            ).size
          }\`\nMembers: \`${interaction.guild.members.cache.size}\``,
          inline: true,
        }
      )
      .setColor("#323338")
    interaction.reply({ embeds: [embed] });
  },


};
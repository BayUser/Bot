const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Yardım komutu.",
  type: 1,
  options: [],

  run: async(client, interaction) => {
//ANKA CODE
    const embed = new Discord.EmbedBuilder()
    .setAuthor({ name: `Mechatron | Yardım Menüsü` })
    .setFooter({ text: `OguZ • ȣ OguZ#2600` })
    .setImage("https://media.discordapp.net/attachments/1125194165513375804/1125377339707113552/20230703_134738.jpg")
    .setDescription(`Herhangi bir yardıma ihtiyacın olursa seni [destek sunucumuzda](https://discord.gg/MWBMqd7jjz) bekliyor olacağız.\n\n__**Kategoriler**__\n*Moderasyon*\n*Kullanıcı*\n*Kayıt*`)
    .setColor("#323338")
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setLabel("Moderasyon")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("moderationm"),
new Discord.ButtonBuilder()
.setLabel("Kayıt")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("registerm"),
new Discord.ButtonBuilder()
.setLabel("Kullanıcı")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("userm"))
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
  }

};

// Designed And Coded By OguZ INC.

const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {
//ANKA CODE
    const embed = new EmbedBuilder()
    .setAuthor({ name: `Yardım menüsü|Anka Code`,iconURL:'https://media.discordapp.net/attachments/1064266014671503380/1074760048523354282/discord-avatar-128-ECE86.gif?width=96&height=96' })
    .setThumbnail('https://media.discordapp.net/attachments/1064266014671503380/1074760048523354282/discord-avatar-128-ECE86.gif?width=96&height=96')
    .setFooter({ text: `Anka Code • Alfa#2522`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1074760048523354282/discord-avatar-128-ECE86.gif?width=96&height=96' })
    .setImage("https://media.discordapp.net/attachments/1064266014671503380/1075885849557880952/Screenshot_1.png?width=623&height=125")
    .setDescription(`
> **<:r_mod:1076950265183359206> prefix:** */*
> <:r_tac:1076950185231532183> Sahib: <@847596022020309013>
> <:r_yesil:1076950445530026035> Ping: \`15\`

*Ana Komutlar;*

<:r_ayarlar:1077328118047592579> \`Moderasyon\` **hakkında bilgi alabilirsiniz.**
<:r_amungus:1076950579512881172> \`Kayıt\` **hakkında bilgi alabilirsiniz**
<:r_kullanici:1077587198989316117> \`Kullanıcı\` **hakkında bilgi alabilirsiniz.**

*Bağlantılar;*
<:r_discord:1077587395001729034> [Destek Sunucusu]()
<:r_bot:1077587502157807616> [Botu Ekle]()
<:r_tik:1077587538128154635> [Oyver](.`)
    .setColor("#000000")
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setLabel("Moderasyon")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("moderasyon"),
new Discord.ButtonBuilder()
.setLabel("Kayıt")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("kayıt"),
new Discord.ButtonBuilder()
.setLabel("Kullanıcı")
.setStyle(Discord.ButtonStyle.Primary)
.setCustomId("kullanıcı"))
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
  }

};

//ANKA CODE

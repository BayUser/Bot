const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Mercy Yardım Menüsü")
    .setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023671325878931550/IMG_6557.png?width=433&height=433')
    .setImage("https://media.discordapp.net/attachments/1022843509016895568/1024035336256495726/Mercy_Afis_2.png?width=576&height=324")
    .setDescription(`
> **<a:586273537677983774:1012334694907531356> prefix:** */*
> <:45:1007979694131515482> Sahib: <@847596022020309013>
> <:1009095264398753822:1012341965884489831> Ping: \`15\`

*Ana Komutlar;*

<a:583012909177634850:1012334746635862078> \`Moderasyon\` **hakkında bilgi alabilirsiniz.**
<a:586273537677983774:1012334694907531356> \`Kayıt\` **hakkında bilgi alabilirsiniz**
<:14:1008732364198920263> \`Kullanıcı\` **hakkında bilgi alabilirsiniz.**

*Bağlantılar;*
<:888414495423225866:1005818896596611154> [Destek Sunucusu](https://discord.gg/ZyQWrgKg66)
<a:583014055443169301:1012334678126112850> [Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=893238888179580958&permissions=8&scope=bot)
<:onays:1015371223531802695> [Oyver](https://top.gg/bot/893238888179580958/vote)`)
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

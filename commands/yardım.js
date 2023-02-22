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
    .setAuthor({ name: `Yardım menüsü | Anka Code`,iconURL:'https://media.discordapp.net/attachments/1067780547159539762/1077969319654334545/static.png' })
    .setThumbnail('https://media.discordapp.net/attachments/1067780547159539762/1077969319654334545/static.png')
    .setFooter({ text: `Anka Code • Alfa#2522`, iconURL: 'https://media.discordapp.net/attachments/1067780547159539762/1077969319654334545/static.png' })
    .setImage("https://media.discordapp.net/attachments/1064266014671503380/1075885849557880952/Screenshot_1.png?width=623&height=125")
    .setDescription(`
> **🎈refix:** */*
> <:r_tac:1076950185231532183> Sahib: <@871711574593789962>
> <:r_yesil:1076950445530026035> Ping: \`15\`

*Ana Komutlar;*

<:r_ayarlar:1077328118047592579> \`Moderasyon\` **hakkında bilgi alabilirsiniz.**
<:r_amungus:1076950579512881172> \`Kayıt\` **hakkında bilgi alabilirsiniz**
<:r_kullanici:1077587198989316117> \`Kullanıcı\` **hakkında bilgi alabilirsiniz.**

*Bağlantılar;*
<:r_discord:1077587395001729034> [Destek Sunucusu](https://discord.gg/vmj7wqZF5A)
<:r_bot:1077587502157807616> [Botu Ekle](https://discord.gg/vmj7wqZF5A)
<:r_tik:1077587538128154635> [Oyver](https://discord.gg/vmj7wqZF5A`)
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

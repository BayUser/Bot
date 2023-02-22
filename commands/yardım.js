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
> **Prefix:** */*
> Sahip: <@871711574593789962>
> Ping: \`15\`

*Ana Komutlar;*

\`Moderasyon\` **hakkında bilgi alabilirsiniz.**
\`Kayıt\` **hakkında bilgi alabilirsiniz**
\`Kullanıcı\` **hakkında bilgi alabilirsiniz.**

*Bağlantılar;*
[Destek Sunucusu](https://discord.gg/vmj7wqZF5A)
[Botu Ekle](https://discord.gg/vmj7wqZF5A)`)
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

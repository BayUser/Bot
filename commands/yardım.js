const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Yardım komutu.",
  type: 1,
  options: [],

  run: async(client, interaction) => {
//ANKA CODE
    const embed = new EmbedBuilder()
    .setAuthor({ name: `Mechatron | Yardım Menüsü` })
    .setFooter({ text: `OguZ • ȣ OguZ#2600` })
    .setImage("https://media.discordapp.net/attachments/1125194165513375804/1125371444919025676/20230703_132414.png")
    .setDescription(`
> Prefix: \`/\`
> Sahip: <@860229283598827540>
> Ping: \`${client.ws.ping}ms\`

***Ana Komutlar;***
> \`Moderasyon\` **hakkında bilgi alabilirsiniz.**
> \`Kayıt\` **hakkında bilgi alabilirsiniz**
> \`Kullanıcı\` **hakkında bilgi alabilirsiniz.**

***Bağlantılar;***
> [Destek Sunucusu](https://discord.gg/MWBMqd7jjz)
> [Botu Ekle](https://discord.com/oauth2/authorize?client_id=1090346236655173712&scope=bot&permissions=8)`)
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

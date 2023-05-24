const { Client, EmbedBuilder } = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
module.exports = {
  name: "istatistik",
  description: "İstatistik komutu.",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .setColor('#323338')
    .setTitle("• Lunar | İstatistik")
    .setDescription("__**Genel Veriler**__\n• Toplam Kullanıcı Sayısı: \n•Toplam Sunucu Sayısı: \n•Toplam Komut Sayısı: \n\n__**Bot Bilgileri**__\n•Ping Değeri: ${client.ws.ping}")
    .setImage("https://media.discordapp.net/attachments/1071467515252838471/1110965641004978207/20230524_184614.jpg")
    interaction.reply({embeds: [embed]})
  }

};

//ANKA CODE
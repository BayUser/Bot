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
    .setTitle("• Mechatron | İstatistik")
    .setDescription(`<:emoji_17:1126458770973806673> **|** Genel Veriler\n• Toplam Kullanıcı Sayısı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n• Toplam Sunucu Sayısı: **${client.guilds.cache.size}**\n• Toplam Komut Sayısı: **40**\n\n<:emoji_14:1126458666393014322> **|** Bot Bilgileri\n• Ping Değeri: **${client.ws.ping}**\n• Uptime: **${Uptime}**`)
    .setImage("https://media.discordapp.net/attachments/1125194165513375804/1125437444565782548/20230703_174627.jpg")  .setImage("https://media.discordapp.net/attachments/1125194165513375804/1125377339707113552/20230703_134738.jpg")
    interaction.reply({embeds: [embed]})
  }

};

//ANKA CODE
const { Client, EmbedBuilder } = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
module.exports = {
  name: "istatistik",
  description: "Botun istatistiğini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .addFields({ name: 'Bot Sahibi', value: `data#9999`, inline: false})
    .addFields({ name: '• Bellek Kullanımı', value: `${(process.memoryUsage().heapUsed /1024 /512).toFixed(2)}MB`, inline: true})
    .addFields({ name: '<:timeout:1018637770283036752> Çalışma Süresi', value: `${Uptime}`, inline: true})
    .addFields({ name: '<:14:1008347421216100424> Kullanıcılar', value: `${client.users.cache.size}`, inline: false})
    .addFields({ name: '<:discord:1018140828738261073> Sunucular', value: `${client.guilds.cache.size}`, inline: false})
    .addFields({ name: '<:17:1005930191991869500> Kanallar', value: `${client.channels.cache.size}`, inline: false})
    .addFields({ name: '<:033f45c7572f82eeef2b2fa5a13d1b73:1008348057039032341> İşletim Sistemi', value: `Windows 11 Pro 64 Bit`, inline: false})
    .addFields({ name: '<:033f45c7572f82eeef2b2fa5a13d1b73:1008348057039032341> İşlemci', value: `${os.cpus().map(i => `${i.model}`)[0]}`, inline: false})
    .addFields({ name: '<:033f45c7572f82eeef2b2fa5a13d1b73:1008348057039032341> Discord.JS sürüm', value: `14.2.0`, inline: true})
    .addFields({ name: '<:033f45c7572f82eeef2b2fa5a13d1b73:1008348057039032341> Node.JS sürüm', value: `v16.14.2`, inline: true})
    .addFields({ name: '• Bot Kuruluş', value: `05.09.2022`, inline: true})
    .addFields({ name: '• Komut Sayısı', value: `Bilinmiyor`, inline: true})
    .addFields({ name: '• Ping', value: `${client.ws.ping}`, inline: true})
    interaction.reply({embeds: [embed]})

  }

};
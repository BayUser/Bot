const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")

module.exports = {
  name: "yardım",
  description: "Yardım komutu.",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    
    const Duyuru = db.fetch(`Duyurular`)

      if(!Duyuru) {
        
    const embed = new Discord.EmbedBuilder()
    .setAuthor({ name: `Mechatron | Yardım Menüsü` })
    .setFooter({ text: `OguZ • oguzh3n` })
    .setImage("https://media.discordapp.net/attachments/1125194165513375804/1125437444565782548/20230703_174627.jpg")
    .setDescription(`> Herhangi bir yardıma ihtiyacın olursa seni [destek sunucumuzda](https://discord.gg/MWBMqd7jjz) bekliyor olacağız.\n\n<:emoji_16:1126458747712192543> **|** Duyurular\n*Aktif bir duyuru bulunmuyor.*\n\n<:emoji_17:1126458770973806673> **|** Kategoriler\n*Moderasyon*\n*Kullanıcı*\n*Kayıt*\n\n<:emoji_7:1126458264243150978> **|** Linkler\n[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=1090346236655173712&scope=bot&permissions=8)\n[Destek Sunucusu](https://discord.gg/MWBMqd7jjz)`)
    .setColor("#323338")
    
    interaction.reply({embeds: [embed], ephemeral: false})
  } else {
        const duyurular = db.fetch(`Duyurular`).map(y => `*${y}*`).join("\n")
        const embed = new Discord.EmbedBuilder()
       .setAuthor({ name: `Mechatron | Yardım Menüsü` })
       .setFooter({ text: `OguZ • oguzh3n` })
       .setImage("https://media.discordapp.net/attachments/1125194165513375804/1125437444565782548/20230703_174627.jpg")
       .setDescription(`> Herhangi bir yardıma ihtiyacın olursa seni [destek sunucumuzda](https://discord.gg/MWBMqd7jjz) bekliyor olacağız.\n\n<:emoji_16:1126458747712192543> **|** Duyurular\n${duyurular || "*Aktif bir duyuru bulunmuyor.*"}\n\n<:emoji_17:1126458770973806673> **|** Kategoriler\n*Moderasyon*\n*Kullanıcı*\n*Kayıt*\n\n<:emoji_7:1126458264243150978> **|** Linkler\n[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=1090346236655173712&scope=bot&permissions=8)\n[Destek Sunucusu](https://discord.gg/MWBMqd7jjz)`)
       .setColor("#323338")
        
    interaction.reply({embeds: [embed], ephemeral:false})
 }
    }
};

// Designed And Coded By OguZ INC.

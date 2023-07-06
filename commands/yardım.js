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
    .setDescription(`> Herhangi bir yardıma ihtiyacın olursa seni [destek sunucumuzda](https://discord.gg/MWBMqd7jjz) bekliyor olacağız.\n\n__**Duyurular**__\n*Aktif bir duyuru bulunmuyor.*\n\n__**Kategoriler**__\n*Moderasyon*\n*Kullanıcı*\n*Kayıt*\n\n__**Linkler**__\n[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=1090346236655173712&scope=bot&permissions=8)\n[Destek Sunucusu](https://discord.gg/MWBMqd7jjz)`)
    .setColor("#323338")
    
    interaction.reply({embeds: [embed], ephemeral: false})
  } else {
        const duyurular = db.fetch(`Duyurular`).map(y => `*${y}*`).join("\n")
        const embed = new Discord.EmbedBuilder()
       .setAuthor({ name: `Mechatron | Yardım Menüsü` })
       .setFooter({ text: `OguZ • oguzh3n` })
       .setImage("https://media.discordapp.net/attachments/1125194165513375804/1125437444565782548/20230703_174627.jpg")
       .setDescription(`> Herhangi bir yardıma ihtiyacın olursa seni [destek sunucumuzda](https://discord.gg/MWBMqd7jjz) bekliyor olacağız.\n\n__**Duyurular**__\n${duyurular || "*Aktif bir duyuru bulunmuyor.*"}\n\n__**Kategoriler**__\n*Moderasyon*\n*Kullanıcı*\n*Kayıt*\n\n__**Linkler**__\n[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=1090346236655173712&scope=bot&permissions=8)\n[Destek Sunucusu](https://discord.gg/MWBMqd7jjz)`)
       .setColor("#323338")
        
    interaction.reply({embeds: [embed], ephemeral:false})
 }
    }
};

// Designed And Coded By OguZ INC.

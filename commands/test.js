const { EmbedBuilder, PermissionsBitField } = require("discord.js");

const { SlashCommandBuilder } = require("@discordjs/builders");

const db = require("croxydb")

 module.exports = {
  name: "premium",
  description: "Premium komutu.",
  type: 1,
  options: [],

    // komutu geliştirmek istersen guide: https://discordjs.guide/slash-commands/advanced-creation.html

    run: async (client, interaction) => {

      const pre = db.fetch(`Premiums`)

      if(!pre) {

       

      const Yardım = new EmbedBuilder()

         .setColor("Blurple")
         .setFooter({name: "Premium • oguzh3n"})
         .setDescription(`> Premium satın almak için [destek sunucumuza]() gelebilirsin`)

      interaction.reply({embeds: [Yardım]})

        

      } else {

       

        const duyurular = db.fetch(`Duyurular`).map(y => `**<:Duyuru:1124023312272597162> Duyuru: \`${y}\`**`).join("\n")

        

        const Yardım = new EmbedBuilder()

         .setColor("Blurple")

         .setImage("https://media.discordapp.net/attachments/1004368050038001804/1086953067301310524/standard_1.gif")

         .setTitle("Fr3zy Bot • Yardım menüsü")

        .setDescription(`

</yardım:0> • Yardım menüsünü gösterir.

> **Uptime Komutları**

</uptime-sistemi-kur:0> • Sunucuna uptime sistemi eklersin.

> **Bot Komutları**

</istatistik:0> • Bot istatistiklerini gösterir.

</ping:0> • Botun ping değerlerini gösterir.

**<:zil:1121840973870288956> Bot duyuruları**

${duyurular || "Aktif bir duyuru bulunmuyor."}

`)

      interaction.reply({embeds: [Yardım]})

        

    }   

    }

 };


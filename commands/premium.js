const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const db = require("croxydb");


 module.exports = {
  name: "premium",
  description: "Premium komutu.",
  type: 1,
  options: [],

    // komutu geliştirmek istersen guide: https://discordjs.guide/slash-commands/advanced-creation.html

    run: async (client, interaction) => {
      const pre = db.get(`Premiums`);
      if(interaction.user.id != pre) {

      const Yardım = new EmbedBuilder()
         .setAuthor({ name: "Mechatron | Premium" })
         .setColor("#323338")
         .setDescription(`> Premium satın almak için [destek sunucumuza](https://discord.gg/MWBMqd7jjz) gelebilirsin.\n\n<:emoji_9:1126458325593243739> **|** Premium\nHesabında premium üyelik **bulunmamakta**.` + pre)

      interaction.reply({embeds: [Yardım]})

      } else {
      

        const Yardım = new EmbedBuilder()
         .setAuthor({ name: "Mechatron | Premium"})
         .setColor("#323338")
         .setDescription(`> Hesabında premium üyelik **bulunmakta**. İptal etmek veya destek için seni [destek sunucumuzda](https://discord.gg/MWBMqd7jjz) bekliyor olacağız.`)

      interaction.reply({embeds: [Yardım]})

        

    }   

    }

 };


const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const db = require("croxydb");


 module.exports = {
  name: "test",
  description: "Test komutu.",
  type: 1,
  options: [],

    // komutu geliştirmek istersen guide: https://discordjs.guide/slash-commands/advanced-creation.html

    run: async (client, interaction, message, args) => {
      
      const pre = db.get(`Prekod`);
      const limit = db.get(`Limit`);
      if(!pre) {
        
         const Yardım = new EmbedBuilder()
         .setAuthor({ name: "Mechatron | Test" })
         .setColor("#323338")

      interaction.reply({embeds: [Yardım]})
      
      } else {

        const Yardım = new EmbedBuilder()
         .setAuthor({ name: "Mechatron | Test"})
         .setColor("#323338")
         .setDescription(pre + limit)
      interaction.reply({embeds: [Yardım]})

        

    }   

    }

 };


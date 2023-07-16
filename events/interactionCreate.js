const { Collection, EmbedBuilder, Client, Interaction, MessageButton, MessageActionRow } = require("discord.js");
const db = require("croxydb");
const Discord = require("discord.js");
const { readdirSync } = require("fs");
const { colors, fromIntToDate } = require('discord-toolbox');
const config = require('../config.json');
const moment = require('moment');

module.exports = async(client, interaction) => {
  
  if(interaction.isChatInputCommand()) {
  if (!interaction.guildId) return;

    readdirSync('./commands').forEach(f => {

      const cmd = require(`../commands/${f}`);

      if(interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {

        return cmd.run(client, interaction, db);

      }
    });

  }

    const butonrol = db.fetch(`buton_rol${interaction.guild.id}`)

    if(butonrol)
    if (!interaction.isButton()) return;
    if(interaction.customId === "rol") {
    if(!interaction.member.roles.cache.has(butonrol)) { 
      
      interaction.member.roles.add(butonrol)
      interaction.reply({content: "<:tik:1039607067729727519> | Rol Başarıyla Verildi!", ephemeral: true})
    } else {      
      interaction.member.roles.remove(butonrol)
      interaction.reply({content: "<:carpi:1040649840394260510> | Rol Başarıyla Alındı!", ephemeral: true})
    }
      }  
};
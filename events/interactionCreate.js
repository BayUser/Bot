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

};
const { Collection, EmbedBuilder, Client, Interaction, MessageButton, MessageActionRow } = require("discord.js");
const db = require("croxydb");
const Discord = require("discord.js");
const { readdirSync } = require("fs");
const { colors, fromIntToDate } = require('discord-toolbox');
const config = require('../config.json');
const moment = require('moment');
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ChannelType, PermissionsBitField } = require('discord.js');


module.exports = async (client, interaction) => {

  if (interaction.isCommand()) {
    if (!interaction.guildId) return;

    readdirSync('./commands').forEach(f => {
      const cmd = require(`../commands/${f}`);

      if (interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {
        return cmd.run(client, interaction, db);
      }
    });
  }

  const butonrol = db.fetch(`buton_rol${interaction.guild.id}`);

  if (interaction.customId === "rol") {
    if (!interaction.member.roles.cache.has(butonrol)) {
      interaction.member.roles.add(butonrol);
      interaction.reply({ content: `• Butona tıkladığın için sana <@&${butonrol}> rolünü verdim.`, ephemeral: true });
    } else {
      interaction.member.roles.remove(butonrol);
      interaction.reply({ content: `• Butona tıkladığın için senden <@&${butonrol}> rolünü geri aldım.`, ephemeral: true });
    }
  }
}
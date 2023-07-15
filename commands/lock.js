const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    name:'lock'),
    description:('Kanala erişimi kapatır.'),

  async execute(interaction) {

    const channel = interaction.channel;

    if (channel.permissionsFor(interaction.guild.roles.everyone).has('SEND_MESSAGES')) {

      await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {

        SEND_MESSAGES: false

      });

      await interaction.reply('Kanal başarıyla kilitlendi.');

    } else {

      await interaction.reply('Kanal zaten kilitli.');

    }

  },

};


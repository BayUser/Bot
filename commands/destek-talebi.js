const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageEmbed } = require('discord.js');

module.exports = {
        .setName('ticket'),
        .setDescription('Destek talebi oluşturun'),

    run: async execute(interaction) {

        // Destek talebi oluşturma

        const channel = await interaction.guild.channels.create(`ticket-${interaction.user.id}`);

        const supportRole = interaction.guild.roles.cache.find(role => role.name === 'Destek Ekibi'); // Destek ekibi rolü adını buraya yazın

        const everyoneRole = interaction.guild.roles.everyone;

        channel.permissionOverwrites.create(supportRole, { VIEW_CHANNEL: true, SEND_MESSAGES: true });

        channel.permissionOverwrites.create(everyoneRole, { VIEW_CHANNEL: false });

        const embed = new MessageEmbed()

            .setTitle('Destek Talebi')

            .setDescription('Destek talebiniz oluşturuldu, bir yetkili en kısa sürede sizinle ilgilenecektir.')

            .setColor('#FF0000');

        channel.send({ content: `${interaction.user}`, embeds: [embed] });

        interaction.reply({ content: 'Destek talebiniz oluşturuldu.', ephemeral: true });

    },

};


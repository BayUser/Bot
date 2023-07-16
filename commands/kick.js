// kick.js

const { CommandInteraction } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kick komutu.',
    options: [
        {
            name: 'user',
            description: 'Kick seçeneği.',
            type:6,
            required: true,
        },
        {
            name: 'reason',
            description: 'Kick seçeneği.',
            type:3,
            required: false,
        },
    ],
    run: async(interaction = CommandInteraction) => {
        const member = interaction.options.getMember('user');
        const reason = interaction.options.getString('reason') || 'Sebep girilmedi.';

        if (!member.kickable) {
            return interaction.reply('• Birşeyler ters gitti.');
        }

        try {
            await member.kick(reason);
            interaction.reply(`• ${member.user.tag} Adlı kullanıcı sunucudan atıldı.`);
        } catch (error) {
            interaction.reply('• Birşeyler ters gitti.');
        }
    },
};

const { MessageActionRow, MessageButton, EmbedBuilder, ButtonBuilder, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ticket',
  description: 'Ticket komutu.',
  type: 1,
  options: [],

  run: async (interaction) => {
    const { user, guildId, channelId } = interaction;

    // Buton oluşturma
    const button = new ButtonBuilder()
      .setCustomId('create_ticket')
      .setLabel('Ticket Oluştur')
      .setStyle('PRIMARY');

    // Butonu içeren Action Row'u oluşturma
    const row = new MessageActionRow()
      .addComponents(button);

    // Embed oluşturma
    const ticketEmbed = new EmbedBuilder()
      .setTitle('Ticket Oluşturma')
      .setDescription('Ticket oluşturmak için aşağıdaki butona tıklayın.')
      .setColor('#323338');

    // Komutun yanıtı olarak embed ve butonlu mesajı gönderme
    await interaction.reply({ embeds: [ticketEmbed], components: [row], ephemeral: true });
  },
};

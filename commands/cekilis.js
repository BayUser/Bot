const { Client, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'cekilis',
  description: 'Çekiliş komutu.',
  type: 1,
  options: [
    {
      name: 'kazananlar',
      description: 'Çekiliş seçeneği.',
      type: 4,
      required: true,
    },
    {
      name: 'odul',
      description: 'Çekiliş seçeneği.',
      type: 3,
      required: true,
    },
    {
      name: 'sure',
      description: 'Çekiliş süresi (saniye cinsinden).',
      type: 4,
      required: true,
    },
  ],

  run: async (client, interaction) => {

    const { user, guildId, channel } = interaction;
    const kazananSayisi = interaction.options.getInteger('kazananlar');
    const odul = interaction.options.getString('odul');
    const sure = interaction.options.getInteger('sure');

    if (kazananSayisi <= 0 || kazananSayisi > 10) {
      return interaction.reply({
        content: '• Kazanan sayısı 1 ile 10 arasında olmalıdır.',
        ephemeral: true,
      });
    }

    // Çekiliş başlatıldı mesajı
    const baslatildiEmbed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle(':tada: Çekiliş Başlatıldı! :tada:')
      .setDescription(`Katılmak için 🎉 emojisine tıklayın!\nÖdül: **${odul}**\nKazanan sayısı: **${kazananSayisi}**`);
    const baslatildiMesaj = await channel.send({ embeds: [baslatildiEmbed] });
    baslatildiMesaj.react('🎉');

    // Bir süre sonra çekiliş bitirilir
    setTimeout(async () => {
      const mesaj = await channel.messages.fetch(baslatildiMesaj.id);
      const tepkiler = mesaj.reactions.cache.get('🎉').users.cache;
      const katilanlar = [];
      tepkiler.forEach((user) => {
        if (!user.bot) {
          katilanlar.push(user.id);
        }
      });
      if (katilanlar.length < kazananSayisi) {
        return interaction.followUp({
          content: '• Yeterli katılım olmadığı için çekiliş iptal edildi.',
        });
      }

      // Kazananları seç
      const kazananlar = [];
      for (let i = 0; i < kazananSayisi; i++) {
        const randomIndex = Math.floor(Math.random() * katilanlar.length);
        const winner = katilanlar[randomIndex];
        kazananlar.push(`<@${winner}>`);
        katilanlar.splice(randomIndex, 1);
      }

      // Kazananları açıkla
      const kazananlarEmbed = new EmbedBuilder()
        .setColor('#323338')
        .setTitle(':tada: Çekiliş Sonuçları :tada:')
        .setDescription(`Ödül: ${odul}\nKazananlar: ${kazananlar.join(', ')}`);
      interaction.followUp({ embeds: [kazananlarEmbed] });

    }, sure * 1000); // Çekiliş süresi (saniye cinsinden)

    interaction.reply({ content: '• Çekiliş başlatıldı.', ephemeral: true });

  },
};

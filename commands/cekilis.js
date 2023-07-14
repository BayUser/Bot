const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'cekilis',
  description: 'Çekiliş komutu.',
  type: 1,
  options: [
    {

      name: 'kazananlar',
      description: 'Kazanan sayısını belirtin.',
      type: 'INTEGER',
      required: true,

    },
    {

      name: 'odul',
      description: 'Çekiliş ödülünü belirtin.',
      type: 'STRING',
      required: true,
    },
  ],

  run: async (client, interaction) => {
    
    const { user, guildId, channel } = interaction;
    const kazananSayisi = interaction.options.getInteger('kazananlar');
    const odul = interaction.options.getString('odul');
    
    if (kazananSayisi <= 0 || kazananSayisi > 10) {

      return interaction.reply({
        content: 'Kazanan sayısı 1 ile 10 arasında olmalıdır.',
        ephemeral: true,
      });
    }
    // Çekiliş başlatıldı mesajı

    const baslatildiEmbed = new MessageEmbed()
      .setColor('#323338')
      .setTitle('Çekiliş Başlatıldı!')
      .setDescription(`Katılmak için 🎉 emojisine tıklayın!\nÖdül: ${odul}`);
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
          content: 'Yeterli katılım olmadığı için çekiliş iptal edildi.',
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

      const kazananlarEmbed = new MessageEmbed()
        .setColor('#323338')
        .setTitle('Çekiliş Sonuçları')
        .setDescription(`Ödül: ${odul}\nKazananlar: ${kazananlar.join(', ')}`);
      interaction.followUp({ embeds: [kazananlarEmbed] });

    }, 60000); // 60 saniye (çekilişin süresi)

    interaction.reply({ content: 'Çekiliş başlatıldı!', ephemeral: true });

  },

};


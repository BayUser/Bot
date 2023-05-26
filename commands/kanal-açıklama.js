const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "kanal-açıklama",
  description: "Kanal-Açıklama komutu.",
  type: 1,
  options: [
    {
        name:"kanal",
        description:"Açıklaması değiştirilicek kanalı belirtin.",
        type:7,
        required:true,
        channel_types:[0]
    },
    {
        name:"açıklama",
        description:"Kanal açıklamasını girin.",
        type:3,
        required:true
    },
    
],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const aciklama = interaction.options.getString('açıklama')
    const kanal2 = interaction.options.getChannel('kanal')
    client.channels.cache.get(kanal2.id).setTopic(aciklama)
interaction.reply("• Kanal Açıklaması Değiştirildi.")

  }

};

//ANKA CODE
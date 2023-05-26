const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
module.exports = {
  name: "oylama",
  description: "Oylama komutu.",
  type: 1,
  options: [
    {
        name:"oylama",
        description:"Oylama açıklamasını gir.",
        type:3,
        required:true
    },
  ],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageNicknames)) return interaction.reply({content: "İsimleri Yönet Yetkin Yok!", ephemeral: true})

    const oylama = interaction.options.getString('oylaman')
    const embed = new EmbedBuilder()
    .setTitle("Oylama")
    .setDescription(`Oylama: **${oylama}**`)
    .setColor("#323338")
interaction.channel.send({embeds: [embed]}).then((mesaj) => {
interaction.reply({content: "• Oylama oluşturuldu.", ephemeral: true}) 
mesaj.react("✅")
mesaj.react("❌")

})
  }

};
//ANKA CODE
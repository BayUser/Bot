const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb");

module.exports = {
  name:"premium-ekle",
  description:"Premium komutu.",
  type:1,
  options:[

    {
      name: "id",
      description: "Premium seçeneği.",
      type: 1,
    }

  ],

          run: async (client, interaction) => {      

      if(interaction.user.id !== "860229283598827540"){

      return interaction.reply({content: "• Bu işlem için yeterli yetkiye sahip değilsin."})

      }

      

      const duyuru = interaction.options.getString('d')

      const Embed = new EmbedBuilder()

        .setDescription(`• **${duyuru}** Adlı duyuru sisteme eklendi.`)

        .setColor("Green")

      interaction.reply({embeds: [Embed]})       

      db.push(`Duyurular`, `${duyuru}`)

  }

};
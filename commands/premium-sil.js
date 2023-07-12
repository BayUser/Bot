const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb");

module.exports = {
  name:"premium-sil",
  description:"Premium komutu.",
  type:1,
  options:[

    {
      name: "kod",
      description: "Premium seçeneği.",
      type: 3,
      required:true
    }

  ],

          run: async (client, interaction) => {      
      if(interaction.user.id !== "860229283598827540"){
      return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin."})

      }

      

      const kod = interaction.options.getString('kod')
      const Embed = new EmbedBuilder()

        .setDescription(`• **${kod}** Adlı kod silindi.`)
        .setColor("Green")

      interaction.reply({embeds: [Embed]})       
      db.delete(`Prekod`, `${kod}`)

  }

};
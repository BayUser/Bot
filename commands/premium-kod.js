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
      type: 3,
      required:true
    }

  ],

          run: async (client, interaction) => {      
      if(interaction.user.id !== "860229283598827540"){
      return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin."})

      }

      

      const id = interaction.options.getString('id')
      const Embed = new EmbedBuilder()

        .setDescription(`• **${id}** Adlı kod oluşturuldu.`)
        .setColor("Green")

      interaction.reply({embeds: [Embed]})       
      db.set(`Premiums.${id}`, `${id}`)

  }

};
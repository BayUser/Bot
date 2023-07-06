const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb");

module.exports = {
  name:"duyuru-ekle",
  description:"Duyuru komutu.",
  type:1,
  options:[
    {
      name: "duyuru",
      description: "Duyuru seçeneği.",
      type: 3,
    }
  ],

          run: async (client, interaction) => {      


      if(interaction.user.id !== "860229283598827540"){
      return interaction.reply({content: ["• Bu işlem için yeterli yetkiye sahip değilsin."]})
      }
      

      const duyuru = interaction.options.getString('duyuru')
      const Embed = new EmbedBuilder()

        .setTitle(`Duyuru eklendi`)
        .setDescription(`**<:tik:1121840967595610153> \`${duyuru}\` adlı duyuru sisteme eklendi.**`)
        .setColor("Green")

      interaction.reply({embeds: [Embed]})       

      db.push(`Duyurular`, `${duyuru}`)

  }

};
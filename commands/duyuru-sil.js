const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

const db = require("croxydb")

module.exports = {
  name:"duyuru-sil",
  description:"Duyuru komutu.",
  type:1,
  options:[
    {
      name:"duyuru",
      description:"Duyuru içeriği.",
      type:3,
      required:true
    }
  ],

              run: async (client, interaction) => {      

      

      if(interaction.user.id !== "860229283598827540"){

      return interaction.reply({content: "• Bu işlem için yeterli yetkiye sahip değilsin."})

      }

      

      const duyuru = interaction.options.getString('duyuru')

        

      const Duyurular = db.fetch(`Duyurular`, [])

      if(!Duyurular.includes(duyuru)) {

      

      const DuyuruYok = new EmbedBuilder()

        .setDescription(`• Sistemde **${duyuru}** Adında bir duyuru bulunmuyor.`)
        .setColor('Red')

      interaction.reply({embeds: [DuyuruYok]})

       

      } else {

      

      const Embed = new EmbedBuilder()

        .setDescription(`• **${duyuru}** Adlı duyuru sistemden kaldırıldı.`)
        .setColor("Green")

      interaction.reply({embeds: [Embed]})

       

      db.unpush(`Duyurular`, `${duyuru}`)

   

    }

  }

}
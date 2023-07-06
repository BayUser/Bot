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

      const YetkiYok = new EmbedBuilder()

        .setDescription(`**<:carpi:1121840969340420127> Bu komutu kullanabilmek için \`Bot sahibi\` olmalısın.**`)

        .setColor('Red')

        .setTitle("Olamaz yetkin yok")

      

      if(interaction.user.id !== "860229283598827540"){

      return interaction.reply({embeds: [YetkiYok]})

      }

      

      const duyuru = interaction.options.getString('duyuru')

        

      const Duyurular = db.fetch(`Duyurular`, [])

      if(!Duyurular.includes(duyuru)) {

      

      const DuyuruYok = new EmbedBuilder()

        .setDescription(`**<:carpi:1121840969340420127> Sistemde \`${duyuru}\` adında bir duyuru bulunmuyor.**`)

        .setColor('Red')

        .setTitle("Duyuru yok")

      interaction.reply({embeds: [DuyuruYok]})

       

      } else {

      

      const Embed = new EmbedBuilder()

        .setTitle(`Duyuru kaldırıldı`)

        .setDescription(`**<:tik:1121840967595610153> \`${duyuru}\` adlı duyuru sistemden kaldırıldı.**`)

        .setColor("Green")

      interaction.reply({embeds: [Embed]})

       

      db.unpush(`Duyurular`, `${duyuru}`)

   

    }

  }

}
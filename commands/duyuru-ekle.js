const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb");

module.exports = {
  name:"",
  description:"",
  type

          run: async (client, interaction) => {      

      

      const YetkiYok = new EmbedBuilder()
        .setDescription(`**<:carpi:1121840969340420127> Bu komutu kullanabilmek için \`Bot sahibi\` olmalısın.**`)
        .setColor('Red')
        .setTitle("Olamaz yetkin yok")

      if(interaction.user.id !== "963347002052214824"){
      return interaction.reply({embeds: [YetkiYok]})
      }

      

      const duyuru = interaction.options.getString('duyuru')
      const Embed = new EmbedBuilder()

        .setTitle(`Duyuru eklendi`)
        .setDescription(`**<:tik:1121840967595610153> \`${duyuru}\` adlı duyuru sisteme eklendi.**`)
        .setColor("Green")

      interaction.reply({embeds: [Embed]})       

      db.push(`Duyurular`, `${duyuru}`)

     

  }

}
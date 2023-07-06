const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb");

module.exports = {
  
      name: ('duyuru-ekle'),
      description: ('Duyuru komutu.'),
      type: 1,
      options: [
        {
          name:"duyuru",
          description:"Duyuru seçeneği.",
          type:3,
          required:true
        }
      ],

          run: async (client, interaction) => {      

      

      const YetkiYok = new EmbedBuilder()
        .setDescription("• Bu komutu kullanabilmek için \`developer\` olmalısın.")
        .setColor('Red')
        .setTitle("Hata")

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
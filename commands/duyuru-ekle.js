const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb");

module.exports = {
  slash duyuru-ekle                 "Admin     

 "coldown: ,    options:[],             

    data: new SlashCommandBuilder()        .setName('duyuru-ekle')
      .setDescription('🌟 Sisteme bir duyuru ekler.')
      .setDMPermission(false)
      .addStringOption(option =>
        option
          .setName('duyuru')
          .setDescription('Eklenecek duyuruyu belirtin.')
          .setRequired(true)),

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
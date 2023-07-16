const Discord = require('discord.js');
const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'ban',
  description: 'Ban komutu.',
  type:1,
  options:[{
    name:"user",
    description:"Ban seçeneği.",
    type:6,
    required:true
  }],

  run: async(client, interaction, args) => {

  if (!interaction.member.permissions.has("BAN_MEMBERS")) {
  return interaction.reply("• Bu komut için yeterli yetkiye sahip değilsin.");
   }
    let kisi = interaction.options.getMember('user');

    interaction.guild.members.ban(kisi).then(() => {
    interaction.reply(`• ${kisi} Adlı kullanıcı sunucudan yasaklandı.`)

    

    }).catch(err => {
        interaction.reply("• Birşeyler ters gitti.");
    })
}
}
const Discord = require('discord.js');
const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'kick',
  description: 'Kick komutu.',
  type:1,
  options:[
    {
    name:"user",
    description:"Kick seçeneği.",
    type:6,
    required:true
    }
  ],

  run: async(client, interaction, args) => {

  if (!interaction.member.permissions.has("BAN_MEMBERS")) {
  return interaction.reply("• Bu komut için yeterli yetkiye sahip değilsin.");
   }
    let kisi = interaction.options.getMember('user');

    interaction.guild.members.kick(kisi).then(() => {
    interaction.reply(`• ${kisi} Adlı kullanıcı sunucudan atıldı.`)

    

    }).catch(err => {
        interaction.reply("• Birşeyler ters gitti.");
    })
}
}
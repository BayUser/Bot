const Discord = require('discord.js');
const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'forceban',
  description: 'Forceban komutu.',
  type:1,
  options:[{
    name:"user",
    description:"Forceban seçeneği.",
    type:6,
    required:true
  }],

  run: async(client, interaction, args) => {

  if (!interaction.member.permissions.has("BAN_MEMBERS")) {
  return interaction.reply("• Bu komut için yeterli yetkiye sahip değilsin.");
   }
    let kisi = interaction.options.getMember('user');

    interaction.guild.members.ban(kisi).then(() => {
    interaction.reply(`**<:emoji_6:1126458236711731200> | ${kisi}** Adlı kullanıcı yasaklandı.`)

    

    }).catch(err => {
        interaction.reply("• Birşeyler ters gitti.");
    })
}
}
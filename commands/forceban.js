const Discord = require('discord.js');
const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'forceban',
  description: 'Forceban komutu.',
  type:1,
  options:[],

  run: async(client, interaction, args) => {

  if (!interaction.member.permissions.has("BAN_MEMBERS")) {
  return interaction.reply("• Bu komut için yeterli yetkiye sahip değilsin.");
   }

    if (!args[0]) return interaction.reply("• Birşeyler ters gitti.");

    let kisi = args[0];

    interaction.guild.members.ban(kisi).then(() => {
    interaction.reply(`**${kisi}** I`)

    

    }).catch(err => {
        interaction.reply("Bir hata oluştu.");
    })
}
}
const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
  name: "reklam-engel",
  description: "Reklam-Engel komutu.",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const embed = new EmbedBuilder()
    .setColor("#323338")
    .setDescription("• Reklam-Engel sistemi **kapatıldı**.")
    const embed2 = new EmbedBuilder()
    .setColor("#323338")
    .setDescription("• Reklam-Engel sistemi **açıldı**.")
 
 let reklam = db.fetch(`reklamengel_${interaction.guild.id}`);
 
 if (reklam)  {
 
     db.delete(`reklamengel_${interaction.guild.id}`);
     interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 if (!reklam)  {
 
     db.set(`reklamengel_${interaction.guild.id}`, true);
    interaction.reply({embeds: [embed2], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 

  }

};
//ANKA CODE
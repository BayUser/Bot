const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
  name: "sa-as",
  description: "Sa-As komutu.",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const embed = new EmbedBuilder()
    .setColor("#323338")
    .setDescription("• Sa-As sistemi **kapatıldı**.")
    const embed2 = new EmbedBuilder()
    .setColor("#323338")
    .setDescription("• Sa-As sistemi **açıldı**.")
 
 let slm = db.fetch(`saas_${interaction.guild.id}`);
 
 if (slm)  {
 
     db.delete(`saas_${interaction.guild.id}`);
     interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 if (!slm)  {
 
     db.set(`saas_${interaction.guild.id}`, true);
    interaction.reply({embeds: [embed2], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 

  }

};
//ANKA CODE
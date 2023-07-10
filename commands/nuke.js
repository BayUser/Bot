const Discord = require("discord.js");
const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'nuke',
  description: "Nuke komutu.",
  type:1,
  options:[],
  
run: async(client, interaction, message, args) => {

const embed = new EmbedBuilder()
.setAuthor({name: "Mechatron | Nuke"})
.setDescription("• Kanal patlatıldı.")
.setColor("#323338")

if(!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.reply("• Bu komut için yeterli yetkiye sahip değilsin.");
interaction.channel.clone({position: interaction.channel.position});
interaction.channel.delete();
  
interaction.reply({embeds:[embed]})


}
}
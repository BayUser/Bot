const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'nuke',
  description: ``,
  type:1,
  options:[],
  
run: async(client, interaction, message, args) => {

const embed = new EmbedBuilder()
.setAuthor({name: "Mechatron | Nuke"})
.setDescription("• Kanal patlatıldı.")
.setColor("#323338")

if(!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.reply("`Bu Komutu Kullanmak İçin Kanalları Yönet Yetkisine Sahip Olmalısın!`");
interaction.channel.clone({position: message.channel.position});
interaction.channel.delete();
  
await interaction.reply({embeds:[embed]})


}
}
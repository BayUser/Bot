const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "emojiler",
  description: "Emojiler komutu.",
  type: 1,
  options: [],

  run: async(client, interaction) => {

  
let animEmotes = [], staticEmotes = [];
interaction.guild.emojis.cache.forEach((x) => {
x.animated ? animEmotes.push(`<a:${x.name}:${x.id}>`) : staticEmotes.push(`<:${x.name}: ${x.id}>`);
})
const embed = new EmbedBuilder()
.setTimestamp()
.setColor('#323338')
.setTitle(`Emoji-List`)
.setDescription(`${animEmotes} ${staticEmotes}`)
interaction.reply({embeds: [embed]})
  }

};
//ANKA CODE
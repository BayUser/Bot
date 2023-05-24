const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ban-list",
  description: "Ban-List komutu.",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    var userlist = interaction.guild.bans.fetch()
    userlist.then(collection => {
    if(collection.first() == null){
      
    const embed = new EmbedBuilder()
    .setDescription("Sunucunuzda Banlanan Üye Bulunamadı.")      
    .setColor("#000000")
    .setTitle("Hata!")
    interaction.reply({embeds: [embed]})
      
    } else {
    const data = collection.map(mr => "`"+mr.user.username+"`").slice(0, 60).join(", ")
    const embed2 = new EmbedBuilder()
    .setTitle("Ban List")
    .setColor("#")
    .setDescription(data)
    interaction.reply({embeds: [embed2]})
}

  })
}

};
//ANKA CODE
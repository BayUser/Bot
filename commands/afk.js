const { Client, EmbedBuilder } = require("discord.js");
const db = require("croxydb")
module.exports = {
  name: "afk",
  description: "Afk komutu.",
  type: 1,
  options: [
    {
        name:"sebep",
        description:"Afk Olma Sebebini Gir.",
        type:3,
        required:true
    },
  ],

  run: async(client, interaction) => {
    const sebep = interaction.options.getString('sebep')
    db.set(`afk_${interaction.user.id}`, sebep);
    interaction.reply("• Afk moduna giriş yaptın.")

    

  }

};
//ANKA CODE
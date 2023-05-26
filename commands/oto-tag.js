const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"oto-tag",
    description: 'Oto-Tag komutu.',
    type:1,
    options: [
        {
            name:"tag",
            description:"Verilecek tagı belirtin.",
            type:3,
            required:true
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageNicknames)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const tag = interaction.options.getString('tag')
    db.set(`ototag_${interaction.guild.id}`, tag)
    interaction.reply({content: "• Ototag ayarlandı."})
}

};
//ANKA CODE
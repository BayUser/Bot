const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"giriş-çıkış",
    description: 'Giriş-Çıkış komutu.',
    type:1,
    options: [
        {
            name:"ayarla",
            description:"Giriş-Çıkış komutu.",
            type:1,
            options:[{name:"kanal",description:"Giriş-çıkış kanalını ayarlar.",type:7,required:true,channel_types:[0]}]            
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const kanal2 = interaction.options.getChannel('kanal')
   db.set(`hgbb_${interaction.guild.id}`, kanal2.id)
   interaction.reply("• Kanal Ayarlandı.")
}

};
//ANKA CODE
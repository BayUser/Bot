const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"greet",
    description: 'Greet komutu.',
    type:1,
    options: [
        {
        name:"ayarla",
        description:"Greet komutu.",
        type:1,
        options:[{name:"kanal",description:"Greet seçeneği.",type:7,required:true,channel_types:[0]}]            
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const kanal2 = interaction.options.getChannel('kanal')
   db.set(`greet_${interaction.guild.id}`, kanal2.id)
   interaction.reply("• Greet kanalı ayarlandı.")
}

};
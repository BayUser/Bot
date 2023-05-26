const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"unban",
    description: 'Unban komutu.',
    type:1,
    options: [
        {
            name:"id",
            description:"Kullanıcı ID belirtin.",
            type:3,
            required:true
        },
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const user = interaction.options.getString('id')
    
    interaction.guild.members.unban(user)
    interaction.reply({content: "• Üyenin yasağı kaldırıldı."})
}

};
//ANKA CODE
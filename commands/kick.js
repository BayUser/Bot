const { PermissionsBitField } = require("discord.js");
module.exports = {
    name:"kick",
    description: 'Kick komutu.',
    type:1,
    options: [
        {
            name:"user",
            description:"Atılacak kullanıcıyı seçin.",
            type:6,
            required:true
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const user = interaction.options.getMember('user')
    if(user.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content:"• Bu kullanıcı sunucu admini olduğu için sunucudan atılamadı.",ephemeral:true})
    user.kick();
    interaction.reply({content: "• Üye sunucudan atıldı."})
}

};
//ANKA CODE
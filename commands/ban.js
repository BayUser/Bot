const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"ban",
    description: 'Ban komutu.',
    type:1,
    options: [
        {
            name:"user",
            description:"Yasaklanıcak Kullanıcıyı Seçin.",
            type:6,
            required:true
        },
        {
            name:"reason",
            description:"Yasaklama Sebebini Belirtin.",
            type:3,
            required:true
        },
    ],
  run: async(client, interaction) => {
    interaction.reply({content:"• Üye sunucudan yasaklandı."})
    
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const user = interaction.options.getMember('user')
    const sebep = interaction.options.getString('reason')
    if(user.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content:"• Bilinmeyen bir hata oluştu..",ephemeral:true})
    user.ban({reason: sebep});
    
}

};
//ANKA CODE
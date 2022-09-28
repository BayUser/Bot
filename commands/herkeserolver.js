const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"otorol-kanal",
    description: 'Giriş Çıkış Sistemini Ayarlarsın!',
    type:1,
    options: [
        {
            name:"ayarla",
            description:"Ayarlama İşlemleri",
            type:1,
            options:[{name:"kanal",description:"Otorol Kanalını Ayarlar!",type:7,required:true,channel_types:[0]}]            
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "Kanalları Yönet Yetkin Yok!", ephemeral: true})
    const kanall = interaction.options.getChannel('kanal')
   db.set(`hgbb_${interaction.guild.id}`, kanall.id)
   interaction.reply("Otorol Log Kanalı Başarıyla <#"+kanall+"> Olarak Ayarlandı!")
}

};

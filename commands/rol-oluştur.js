const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"rol-oluştur",
    description: 'Rol-Oluştur komutu.',
    type:1,
    options: [
        {
            name:"isim",
            description:"Oluşturulucak rolün adını belirtin.",
            type:3,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const isim = interaction.options.getString('isim')
   interaction.guild.roles.create({name: isim})
    interaction.reply({content: "• **"+isim+"** Adlı rol oluşturuldu."})
}

};
//ANKA CODE
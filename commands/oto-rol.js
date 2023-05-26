const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"oto-rol",
    description: 'Oto-Rol komutu.',
    type:1,
    options: [
        {
            name:"rol",
            description:"Verilecek rolü belirtin.",
            type:8,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const rol = interaction.options.getRole('rol')
    db.set(`otorol_${interaction.guild.id}`, rol.id)
    interaction.reply({content: "• Otorol ayarlandı."})
}

};
//ANKA CODE
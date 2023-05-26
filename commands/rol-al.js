const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"rol-al",
    description: 'Rol-Al komutu.',
    type:1,
    options: [
        {
            name:"user",
            description:"Rolü alınıcak kullanıcıyı belirtin.",
            type:6,
            required:true
        },
        {
            name:"rol",
            description:"Alınacak rolü belirtin.",
            type:8,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const rol = interaction.options.getRole('rol')
    const user = interaction.options.getMember('user')
    interaction.guild.members.cache.get(user.id).roles.remove(rol)
    interaction.reply({content: "• Rol alındı."})
}

};
//ANKA CODE
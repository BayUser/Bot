const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"forceban",
    description: 'Forceban komutu.',
    type:1,
    options: [
        {
            name:"id",
            description:"Yasaklanıcak üyenin ID numarasını girin.",
            type:3,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const id = interaction.options.getString('id')
  interaction.guild.members.ban(id).catch(() => {})
interaction.reply("<:emoji_6:1126458236711731200> **|** **" +id+ "** ID numaralı üye sunucudan yasaklandı.")
}

};
//ANKA CODE
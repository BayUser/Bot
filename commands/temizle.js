const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"sil",
    description: 'Sil komutu.',
    type:1,
    options: [
        {
            name:"sayı",
            description:"Silinecek mesaj sayısını belirtin.",
            type:3,
            required:true
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return interaction.reply({content: "• Bu komut için yeterli yetkiye sahip değilsin.", ephemeral: true})
    const sayi = interaction.options.getString('sayı')
    interaction.channel.bulkDelete(sayi)
    interaction.reply({content: "• Mesajlar silindi."})
}

};
//ANKA CODE
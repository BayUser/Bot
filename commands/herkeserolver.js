const { EmbedBuilder, MessageButton, MessageActionRow } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
  name: 'herkese-rol-ver',
  description: `Herkese-Rol-Ver komutu.`,
  type:1,
  options:[
  {
    name: "rol",
    description:"Herkese-Rol-Ver seçeneği.",
    type:8,
    required:true
  }
  ],

 run:async (client, args, interaction) => {

    if (!interaction.member.permissions.has("MANAGE_ROLES"))
    return interaction.reply("• Bu komut için yeterli yetkiye sahip değilsin.")
     
    let rol =
    interaction.mentions.roles.first() ||
    interaction.guild.roles.cache.get(args[0]) ||
    interaction.guild.roles.cache.find(rol => rol.name === args[0]);
    
    const row = new InteractionRow()
    .addComponents(
     new MessageButton()
     .setLabel("Evet")
     .setStyle("SUCCESS")
     .setCustomId("evet"),
     new MessageButton()
     .setLabel("Hayır")
     .setStyle("DANGER")
     .setCustomId("h"))

const a = new MessageEmbed()
.setTitle("Godzilla - Herkese Rol Verme Sistemi!")
.setDescription(`Sunucudaki Bütün Üyelere ${rol} Rolünü Vermek İstediğine Emin Misin?`)
.setColor("GOLD")
message.channel.send({embeds: [a], components: [row]}).then(radio => {
    radio.createMessageComponentCollector(user => user.clicker.user.id == interaction.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "h") {
          const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
          message.channel.send("İşlem İptal Edildi!")  
        radio.delete()
        }
        if (interaction.customId == "evet") {
          const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
    const embed313 = new MessageEmbed()
    .setTitle("Godzilla - Rol Verme Sistemi!")
    .setDescription("Herkese Rolü Dağıtıyorum...")
    .setColor("GOLD")
  radio.edit({embeds: [embed313], components: []}).then(msg => {
  message.guild.members.cache.forEach(u => {
    u.roles.add(rol);
    setTimeout(() => {
    }, 1000)
  });
  const embed = new MessageEmbed()
    .setDescription(`✅ **Herkese ${rol} Adlı Rol Verildi!**`)

    .setTitle("Godzilla - Rol Verme Sistemi!")
    .setColor("GOLD")
 radio.edit({embeds: [embed]});
  
 
}

    )
}
});
})
}
}
const { EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require("discord.js");
const Discord = require("discord.js");

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

    run: async (client, args, interaction) => {

    if (!interaction.member.permissions.has("MANAGE_ROLES"))
    return interaction.reply("• Bu komut için yeterli yetkiye sahip değilsin.")
     
    let rol = interaction.options.getMember('rol')
        
    const row = new ActionRowBuilder()
    .addComponents(
     new ButtonBuilder()
     .setLabel("Evet")
     .setStyle("SUCCESS")
     .setCustomId("evet"),
     new ButtonBuilder()
     .setLabel("Hayır")
     .setStyle("DANGER")
     .setCustomId("h"))

const a = new EmbedBuilder()
.setTitle("Godzilla - Herkese Rol Verme Sistemi!")
.setDescription(`Sunucudaki Bütün Üyelere ${rol} Rolünü Vermek İstediğine Emin Misin?`)
.setColor("GOLD")
interaction.channel.send({embeds: [a], components: [row]}).then(radio => {
    radio.createMessageComponentCollector(user => user.clicker.user.id == interaction.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "h") {

          if(interaction.user.id !== interaction.user.id) return interaction.reply({content:"• Birşeyler ters gitti.", ephemeral: true})
          interaction.channel.send("• İşlem iptal edildi.")  
        radio.delete()
        }
        if (interaction.customId == "evet") {
          if(interaction.user.id !== interaction.user.id) return interaction.reply({content:"• Birşeyler ters gitti.", ephemeral: true})
    const embed313 = new EmbedBuilder()
    .setTitle("Godzilla - Rol Verme Sistemi!")
    .setDescription("Herkese Rolü Dağıtıyorum...")
    .setColor("GOLD")
  radio.edit({embeds: [embed313], components: []}).then(msg => {
  interaction.guild.members.cache.forEach(u => {
    u.roles.add(rol);
    setTimeout(() => {
    }, 1000)
  });
  const embed = new EmbedBuilder()
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
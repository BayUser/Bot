const { EmbedBuilder, PermissionsBitField } = require("discord.js");

const Discord = require("discord.js")

const db = require("croxydb")

module.exports = {
  name: "buton-rol",
  description: "Buton-Rol komutu.",
  type: 1,
  options: [
    {
        name: "rol",
        description: "Buton-Rol seçeneği.",
        type: 8,
        required: true
    },
    {
      name: "yazı",
      description: "Buton-Rol seçeneği.",
      type: 3,
      required: true
  },
],



  run: async(client, interaction) => {

 

  if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "<:carpi:1040649840394260510> | Rolleri Yönet Yetkin Yok!", ephemeral: true})

  

  const rol = interaction.options.getRole('rol')

  const yazı = interaction.options.getString('yazı')



  const embed = new EmbedBuilder()

  .setAuthor({ name:"Mechatron | Button Role" })
  .setDescription(`${yazı}`)
  .setColor("#323338")

  const row = new Discord.ActionRowBuilder()

  .addComponents(

  new Discord.ButtonBuilder()

  .setLabel(rol.name)

  .setStyle(Discord.ButtonStyle.Secondary)

  .setCustomId("rol")

  )

  interaction.reply({ embeds: [embed], components: [row] })



    db.set(`buton_rol${interaction.guild.id}`, rol.id)



  }



};
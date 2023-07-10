const {EmbedBuilder, MessageActionRow, MessageButton, ButtonBuilder} = require('discord.js')

const db = require('croxydb')



module.exports = {
   name: 'buton-rol',
   description: "Buton-Rol Komutu.",
   type:1,
   options:[
     {
       name:"rol",
       description:"Rol seçeneği.",
       type:8,
       required:true
     },
     {
       name:"açıklama",
       description:"Açıklama seçeneği",
       type:1,
       required:true
     },
     {
       name:"kanal",
       description:"Kanal seçeneği.",
       type:7,
       required:true
     }
   ],

    run: async (client, interaction, message, args) => {

  if (!interaction.member.permissions.has("MANAGA_MESSAGES")) return interaction.reply("• Bu komut için yeterli yetkiye sahip değilsin.");

 let buton = db.fetch(`buton_${message.guild.id}`)
 let rol = interaction.options.getMember('rol')
 let kanal = interaction.options.getMember('kanal')
 let mesaj = args[2]
 let icerik = interaction.options.getMember('açıklama')



 

 const e = new EmbedBuilder()

 .setColor("RED")

 .setDescription("• Birşeyler ters gitti.")

 

 const l = new EmbedBuilder()

 .setColor("RED")

 .setDescription(icerik)



if(!buton) {



if(!rol) return message.reply({embeds: [e]})   

if(!kanal) return message.reply({embeds: [e]})

if(!icerik) return message.reply({embeds: [e]})



 const row = new IntActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('buton')
                    .setLabel(mesaj)
                    .setStyle('SECONDARY'),

            );

 

 



db.set(`buton_${message.guild.id}`, rol.id)

client.channels.cache.get(kanal.id).send({embeds: [l], components: [row]})



 }

 

        }

}  
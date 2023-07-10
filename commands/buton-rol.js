const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')

const db = require('croxydb')



module.exports = {
   name: 'buton-rol',
   description: "Buton-Rol Komutu.",
   type:1,
   options:[
     {
       name:"rol",
       description:"Rol seçeneği.",
       type:7,
       required:true
     },
     {
       name:"açıklama",
       description:"Açıklama seçeneği",
       type:1,
       required:true
     }
   ],

    run: async (client, interaction, message, args) => {

  if (!interaction.member.permissions.has("MANAGA_MESSAGES")) return interaction.reply(`   **Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.**`);

 let buton = db.fetch(`buton_${message.guild.id}`)
 let rol = message.mentions.roles.first()
 let kanal = message.mentions.channels.first()
 let mesaj = args[2]
 let icerik = args.slice(3).join(" ")



 

 const e = new MessageEmbed()

 .setColor("RED")

 .setDescription("Yanlış şekilde kullandınız. Örn: **g!buton-rol @rol #kanal <buton yazısı> <metin>**")

 

 const l = new MessageEmbed()

 .setColor("RED")

 .setDescription(icerik)



if(!buton) {



if(!rol) return message.reply({embeds: [e]})   

if(!kanal) return message.reply({embeds: [e]})

if(!icerik) return message.reply({embeds: [e]})



 const row = new MessageActionRow()

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
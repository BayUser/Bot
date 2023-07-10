const Discord = require("discord.js");
const ms = require("ms");
var mutelirolu = "Muted" //MUTELENDİGİ ZAMAN VERİLECEK ROLU  BURAYA YAZINIZ...
const { PermissionsBitField } = require("discord.js");

module.exports = {
  name: "mute",
  description:"Mute komutu.",
  type:1,
  options:[
    {
      name:"user",
      description:"User seçeneği.",
      type:6,
      required:true    
    },
    {
      name:"süre",
      description:"Süre seçeneği.",
      type:3,
      required:true
    }
  ],

 run: async (bot, interaction, args) => {
   
  let mutekisi = interaction.options.getMember('user')
  if(!mutekisi) return interaction.reply("• Bir kullanıcı etiketleyin.")
  if(mutekisi.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content:"• Bir hata oluştu.",ephemeral:true})
  let muterol = interaction.guild.roles.find(`name`, mutelirolu);

  if(!muterol){

    try{

      muterol = await interaction.guild.createRole({

        name: mutelirolu,
        color: "#323338",
        permissions:[]

      })

      interaction.guild.channels.forEach(async (channel, id) => {

        await channel.overwritePermissions(muterol, {

          SEND_MESSAGES: false,

          ADD_REACTIONS: false

        });

      });

    }catch(e){

      console.log(e.stack);

    }

  }

  let mutezaman = interaction.options.getMember('süre')

  .replace(`sn`, `s`)

  .replace(`dk`, `m`)

  .replace(`sa`, `h`)

  .replace(`g`, `d`)

  if(!mutezaman) return interaction.reply("• Mute süresi girin.")

  await(mutekisi.addRole(muterol.id));

  interaction.reply(`• <@${mutekisi}> Adlı üye **${args[1]}** boyunca susturuldu.`);

  setTimeout(function(){
    mutekisi.removeRole(muterol.id);
    interaction.channel.send(`• <@${mutekisi}> Adlı üyenin susturulma süresi sona erdi.`);

  }, ms(mutezaman));

}
}
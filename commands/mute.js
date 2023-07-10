const Discord = require("discord.js");
const ms = require("ms");
var mutelirolu = "Muted" //MUTELENDİGİ ZAMAN VERİLECEK ROLU  BURAYA YAZINIZ...

module.exports = {
  name: "mute",
  description:"Mute komutu.",
  type:1,
  options:[
    {
    name:"user",
    description:"User seçeneği.",
    type:6
    }
  ],

 run: async (bot, message, interaction, args) => {
  let mutekisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mutekisi) return message.reply("")
  if(mutekisi.hasPermission("MANAGE_MESSAGES")) return message.reply(`:warning: Yetkili bir kişiyi muteleyemem! \nDoğru Kullanım; \`/mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)
  let muterol = message.guild.roles.find(`name`, mutelirolu);

  if(!muterol){

    try{

      muterol = await message.guild.createRole({

        name: mutelirolu,

        color: "#323338",

        permissions:[]

      })

      message.guild.channels.forEach(async (channel, id) => {

        await channel.overwritePermissions(muterol, {

          SEND_MESSAGES: false,

          ADD_REACTIONS: false

        });

      });

    }catch(e){

      console.log(e.stack);

    }

  }

  let mutezaman = args[1]

  .replace(`sn`, `s`)

  .replace(`dk`, `m`)

  .replace(`sa`, `h`)

  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`:warning: Lütfen bir zaman giriniz! \nDoğru Kullanım; \`/mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)

  await(mutekisi.addRole(muterol.id));

  message.reply(`<@${mutekisi.id}> kullanıcısı ${args[1]} süresi boyunca mutelendi!`);

  setTimeout(function(){
    mutekisi.removeRole(muterol.id);
    message.channel.send(`<@${mutekisi.id}> kullanıcısının mutelenme süresi sona erdi!`);

  }, ms(mutezaman));

}
}
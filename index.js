const { Client, GatewayIntentBits, Partials, EmbedBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder, SelectMenuBuilder, ModalBuilder, ActionRowBuilder } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const Discord = require("discord.js")
const db = require("croxydb")
const client = new Client({
    intents: INTENTS,
    allowedMentions: {
        parse: ["users"]
    },
    partials: PARTIALS,
    retryLimit: 3
});

const express = require("express");
const app = express();

app.listen(process.env.PORT);
app.get("/", (req, res) => {
return res.sendStatus(200)


})

//ANKA CODE
global.client = client;
client.commands = (global.commands = []);

const { readdirSync } = require("fs")
const { TOKEN } = process.env.token;
readdirSync('./commands').forEach(f => {
  if(!f.endsWith(".js")) return;

 const props = require(`./commands/${f}`);
//ANKA CODE
 client.commands.push({
       name: props.name.toLowerCase(),
       description: props.description,
       options: props.options,
       dm_permission: props.dm_permission,
       type: 1
 });
//ANKA CODE
console.log(`[COMMAND] ${props.name} komutu yüklendi.`)

});
readdirSync('./events').forEach(e => {

  const eve = require(`./events/${e}`);
  const name = e.split(".")[0];

  client.on(name, (...args) => {
            eve(client, ...args)
        });
console.log(`[EVENT] ${name} eventi yüklendi.`)
});


client.login(process.env.token)

client.on("guildMemberAdd", member => {
  const kanal = db.get(`hgbb_${member.guild.id}`)
  if(!kanal) return;
  member.guild.channels.cache.get(kanal).send({content: `📥 | ${member} sunucuya katıldı! Sunucumuz **${member.guild.memberCount}** kişi oldu.`})
})

client.on("messageCreate", async message => {
  const db = require("croxydb");

  if (await db.get(`afk_${message.author.id}`)) {
   
    db.delete(`afk_${message.author.id}`);

    message.reply("• Afk modundan çıkış yaptın.");
  }

  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await db.get(`afk_${kullanıcı.id}`);

  if (sebep) {
    message.reply("• Kullanıcı şuanda **"+sebep+"** sebebiyle afk modunda.");
  }
});
client.on("guildMemberAdd", member => {
  const rol = db.get(`otorol_${member.guild.id}`)
  if(!rol) return;
  member.roles.add(rol).catch(() => {})

})
client.on("guildMemberAdd", member => {
  const tag = db.get(`ototag_${member.guild.id}`)
  if(!tag) return;
  member.setNickname(`${tag} | ${member.displayName}`)
})
client.on("guildMemberRemove", member => {
  const kanal = db.get(`hgbb_${member.guild.id}`)
  if(!kanal) return;
  member.guild.channels.cache.get(kanal).send({content: `📤 | ${member} sunucudan ayrıldı. Sunucumuz **${member.guild.memberCount}** kişi oldu.`})
})

client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let kufur = db.fetch(`kufurengel_${message.guild.id}`)
  if(!kufur) return;
  
  if(kufur) {
  const kufurler = [
    
    "amk",
    "piç",
    "yarrak",
    "oç",
    "göt",
    "amq",
    "yavşak",
    "amcık",
    "amcı",
    "orospu",
    "sikim",
    "sikeyim",
    "aq",
    "mk"
       
  ]
//ANKA CODE  
if(kufurler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`Hey <@${message.author.id}>, bu sunucuda küfür edemezsin.`)
}
}
})
client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let reklamlar = db.fetch(`reklamengel_${message.guild.id}`)
  if(!reklamlar) return;
  
  if(reklamlar) {
//ANKA CODE
  const linkler = [
    
    ".com.tr",
    ".net",
    ".org",
    ".tk",
    ".cf",
    ".gf",
    "https://",
    ".gq",
    "http://",
    ".com",
    ".gg",
    ".porn",
    ".edu"
       
  ]
  //ANKA CODE
if(linkler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`Hey <@${message.author.id}>, bu sunucuda reklam yapamazsın.`)
}
}
})

client.on("messageCreate", (message) => {
  
  let saas = db.fetch(`saas_${message.guild.id}`)
  if(!saas) return;
  
  if(saas) {
  
  let selaamlar = message.content.toLowerCase()  
if(selaamlar === 'sa' || selaamlar === 'slm' || selaamlar === 'sea' || selaamlar === ' selamünaleyküm' || selaamlar === 'Selamün Aleyküm' || selaamlar === 'selam'){

message.channel.send(`<@${message.author.id}> Aleykümselam, Hoşgeldin!`)
}
}
})
client.on("interactionCreate", async interaction => {
  if (!interaction.isButton()) return;
  let message = await interaction.channel.messages.fetch(interaction.message.id)  
  if(interaction.customId == "moderationm") {
const embed = new Discord.EmbedBuilder()
.setTitle("Moderasyon Yardım Menüsü!")
.setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023671325878931550/IMG_6557.png?width=433&height=433')
.setDescription(":small_orange_diamond: /ban-list - **Banlı Kullanıcıları Gösterir!**\n:small_orange_diamond: /ban - **Bir Üyeyi Yasaklarsın!**\n:small_orange_diamond: /emojiler - **Emojileri Görürsün!**\n:small_orange_diamond: /forceban - **ID İle Bir Kullanıcıyı Yasaklarsın!**\n:small_orange_diamond: /giriş-çıkış - **Giriş çıkış kanalını ayarlarsın!**\n:small_orange_diamond: /kanal-açıklama - **Kanalın Açıklamasını Değiştirirsin!**\n:small_orange_diamond: /kick - **Bir Üyeyi Atarsın!**\n:small_orange_diamond: /küfür-engel - **Küfür Engel Sistemini Açıp Kapatırsın!**\n:small_orange_diamond: /oto-rol - **Otorolü Ayarlarsın!**\n:small_orange_diamond: /oto-tag - **Oto Tagı Ayarlarsın!**\n:small_orange_diamond: /oylama - **Oylama Açarsın!**\n:small_orange_diamond: /reklam-engel - **Reklam Engel Sistemini Açarsın!**\n:small_orange_diamond: /rol-al - **Rol Alırsın**\n:small_orange_diamond: /rol-oluştur - **Rol Oluşturursun!**\n:small_orange_diamond: /rol-ver - **Rol Verirsin!**\n:small_orange_diamond: /sa-as - **Selam Sistemine Bakarsın!**\n:small_orange_diamond: /temizle - **Mesaj Silersin!**\n:small_orange_diamond: /unban - **Bir üyenin yasağını kaldırırsın!**")
.setColor("#000000")
interaction.reply({embeds: [embed], components: [], ephemeral: true})
  }
  if(interaction.customId == "registerm") {
    const embed2 = new Discord.EmbedBuilder()
    .setTitle("Kayıt Yardım Menüsü!")
    .setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023671325878931550/IMG_6557.png?width=433&height=433')
    .setDescription(":small_orange_diamond: /kayıtlı-rol - **Kayıtlı Rolünü Ayarlarsın!**\n:small_orange_diamond: /kayıt-et - **Bir Üyeyi Kayıt Edersin!**")
    .setColor("#000000")
    interaction.reply({embeds: [embed2], components: [], ephemeral: true})
  }
  if(interaction.customId == "userm") {
    const embed3 = new Discord.EmbedBuilder()
    .setTitle("Kullanıcı Yardım Menüsü!")
    .setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023671325878931550/IMG_6557.png?width=433&height=433')
    .setDescription(":small_orange_diamond: /avatar - **Bir Kullanıcının Avatarına Bakarsın!**\n:small_orange_diamond: /afk - **Sebepli Afk Olursun!**\n:small_orange_diamond: /emoji-yazı - **Bota Emoji İle Yazı Yazdırırsın!**\n:small_orange_diamond: /kurucu-kim - **Kurucuyu Gösterir!**\n:small_orange_diamond: /ping - **Botun pingini gösterir!**\n:small_orange_diamond: /yardım - **Yardım Menüsünü Gösterir!**")
    .setColor("#000000")
    interaction.reply({embeds: [embed3], components: [], ephemeral: true})
  }
})

client.on('interactionCreate', interaction => {

  

  let buton = db.fetch(`buton_${interaction.guild.id}`)

  

  const e = new MessageEmbed()

  .setColor("2F3136")

  .setDescription(":white_check_mark: Rolün başarıyla verildi.")

  

  

  const t = new MessageEmbed()

  .setColor("2F3136")

  .setDescription(":white_check_mark: Rolün başarıyla alındı.")

  

    if (interaction.isButton()){

  if(interaction.customId === 'buton') {

  if(!interaction.member.roles.cache.has(buton)) { 

    

interaction.member.roles.add(buton)

interaction.reply({embeds: [e], ephemeral: true})

  } else {

    interaction.member.roles.remove(buton)

    interaction.reply({embeds: [t], ephemeral: true})

  }
}
}

        
    
    
        
    
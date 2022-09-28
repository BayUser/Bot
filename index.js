const { Client, GatewayIntentBits, Partials } = require("discord.js");
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

global.client = client;
client.commands = (global.commands = []);

const { readdirSync } = require("fs")
const { TOKEN } = require("./config.json");
readdirSync('./commands').forEach(f => {
  if(!f.endsWith(".js")) return;

 const props = require(`./commands/${f}`);

 client.commands.push({
       name: props.name.toLowerCase(),
       description: props.description,
       options: props.options,
       dm_permission: props.dm_permission,
       type: 1
 });

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
  member.guild.channels.cache.get(kanal).send({content: `<:join:1018637625193676893> | ${member} sunucuya katıldı! Sunucumuz **${member.guild.memberCount}** kişi oldu.`})
})

client.on("messageCreate", async message => {
  const db = require("croxydb");

  if (await db.get(`afk_${message.author.id}`)) {
   
    db.delete(`afk_${message.author.id}`);

    message.reply("Afk Modundan Başarıyla Çıkış Yaptın!");
  }

  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await db.get(`afk_${kullanıcı.id}`);

  if (sebep) {
    message.reply("Etiketlediğin Kullanıcı **"+sebep+"** Sebebiyle Afk Modunda!");
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
  member.guild.channels.cache.get(kanal).send({content: `<:leave:1018637599952339015> | ${member} sunucudan ayrıldı! Sunucumuz **${member.guild.memberCount}** kişi oldu.`})
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
  
if(kufurler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`Hey <@${message.author.id}>, Bu Sunucuda Küfür Engel Sistemi Aktif! `)
}
}
})
client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let reklamlar = db.fetch(`reklamengel_${message.guild.id}`)
  if(!reklamlar) return;
  
  if(reklamlar) {

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
  
if(linkler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`Hey <@${message.author.id}>, Bu Sunucuda Reklam Engel Sistemi Aktif! `)
}
}
})

client.on("messageCreate", (message) => {
  
  let saas = db.fetch(`saas_${message.guild.id}`)
  if(!saas) return;
  
  if(saas) {
  
  let selaamlar = message.content.toLowerCase()  
if(selaamlar === 'sa' || selaamlar === 'slm' || selaamlar === 'sea' || selaamlar === ' selamünaleyküm' || selaamlar === 'Selamün Aleyküm' || selaamlar === 'selam'){

message.channel.send(`<@${message.author.id}> Aleykümselam, Hoşgeldin ☺️`)
}
}
})
client.on("interactionCreate", async interaction => {
  if (!interaction.isButton()) return;
  let message = await interaction.channel.messages.fetch(interaction.message.id)  
  if(interaction.customId == "moderasyon") {
const embed = new Discord.EmbedBuilder()
.setTitle("Moderasyon Yardım Menüsü!")
.setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023671325878931550/IMG_6557.png?width=433&height=433')
.setDescription("<:aktif:1018637501092605992> /ban-list - **Banlı Kullanıcıları Gösterir!**\n<:aktif:1018637501092605992> /ban - **Bir Üyeyi Yasaklarsın!**\n<:aktif:1018637501092605992> /emojiler - **Emojileri Görürsün!**\n<:aktif:1018637501092605992> /forceban - **ID İle Bir Kullanıcıyı Yasaklarsın!**\n<:aktif:1018637501092605992> /giriş-çıkış - **Giriş çıkış kanalını ayarlarsın!**\n<:aktif:1018637501092605992> /kanal-açıklama - **Kanalın Açıklamasını Değiştirirsin!**\n<:aktif:1018637501092605992> /kick - **Bir Üyeyi Atarsın!**\n<:aktif:1018637501092605992> /küfür-engel - **Küfür Engel Sistemini Açıp Kapatırsın!**\n<:aktif:1018637501092605992> /oto-rol - **Otorolü Ayarlarsın!**\n<:aktif:1018637501092605992> /oto-tag - **Oto Tagı Ayarlarsın!**\n<:aktif:1018637501092605992> /oylama - **Oylama Açarsın!**\n<:aktif:1018637501092605992> /reklam-engel - **Reklam Engel Sistemini Açarsın!**\n<:aktif:1018637501092605992> /rol-al - **Rol Alırsın**\n<:aktif:1018637501092605992> /rol-oluştur - **Rol Oluşturursun!**\n<:aktif:1018637501092605992> /rol-ver - **Rol Verirsin!**\n<:aktif:1018637501092605992> /sa-as - **Selam Sistemine Bakarsın!**\n<:aktif:1018637501092605992> /temizle - **Mesaj Silersin!**\n<:aktif:1018637501092605992> /unban - **Bir üyenin yasağını kaldırırsın!**")
.setColor("#000000")
interaction.reply({embeds: [embed], components: [], ephemeral: true})
  }
  if(interaction.customId == "kayıt") {
    const embed = new Discord.EmbedBuilder()
    .setTitle("Kayıt Yardım Menüsü!")
    .setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023671325878931550/IMG_6557.png?width=433&height=433')
    .setDescription("<:aktif:1018637501092605992> /kayıtlı-rol - **Kayıtlı Rolünü Ayarlarsın!**\n<:aktif:1018637501092605992> /kayıt-et - **Bir Üyeyi Kayıt Edersin!**")
    .setColor("#000000")
    interaction.reply({embeds: [embed], components: [], ephemeral: true})
  }
  if(interaction.customId == "kullanıcı") {
    const embed = new Discord.EmbedBuilder()
    .setTitle("Kullanıcı Yardım Menüsü!")
    .setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023671325878931550/IMG_6557.png?width=433&height=433')
    .setDescription("<:aktif:1018637501092605992> /avatar - **Bir Kullanıcının Avatarına Bakarsın!**\n<:aktif:1018637501092605992> /afk - **Sebepli Afk Olursun!**\n<:aktif:1018637501092605992> /emoji-yazı - **Bota Emoji İle Yazı Yazdırırsın!**\n<:aktif:1018637501092605992> /kurucu-kim - **Kurucuyu Gösterir!**\n<:aktif:1018637501092605992> /ping - **Botun pingini gösterir!**\n<:aktif:1018637501092605992> /yardım - **Yardım Menüsünü Gösterir!**")
    .setColor("#000000")
    interaction.reply({embeds: [embed], components: [], ephemeral: true})
  }
})
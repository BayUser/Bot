const { Collection, EmbedBuilder, Client, Interaction, MessageButton, MessageActionRow } = require("discord.js");
const db = require("croxydb");
const Discord = require("discord.js");
const { readdirSync } = require("fs");
const { colors, fromIntToDate } = require('discord-toolbox');
const config = require('../config.json');
const moment = require('moment');
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ChannelType, PermissionsBitField } = require('discord.js');


module.exports = async(client, interaction) => {
  
  if(interaction.isChatInputCommand()) {
  if (!interaction.guildId) return;

    readdirSync('./commands').forEach(f => {

      const cmd = require(`../commands/${f}`);

      if(interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {

        return cmd.run(client, interaction, db);

    }
    });
    }

  

    const butonrol = db.fetch(`buton_rol${interaction.guild.id}`)

    if(interaction.customId === "rol") {
    if(!interaction.member.roles.cache.has(butonrol)) {    

      interaction.member.roles.add(butonrol)
      interaction.reply({content: `• Butona tıkladığın için sana <@&${butonrol}> rolünü verdim.`, ephemeral: true})

    } else {      

      interaction.member.roles.remove(butonrol)
      interaction.reply({content: `• Butona tıkladığın için senden <@&${butonrol}> rolünü geri aldım.`, ephemeral: true})

    }
    }  
  
  if (!interaction.isButton()) return;
            if (interaction.customId === "sunucukuronay_"+interaction.user.id) {
        
              interaction.guild.channels.cache.filter(mesajsil => {
                mesajsil.delete()
            })
        
            interaction.guild.roles.cache.filter(mesajsil => {
              mesajsil.delete()
          })

              interaction.guild.channels.create({name: "özel-chat", type: ChannelType.GuildText}).then(channel => {
                channel.permissionOverwrites.create(channel.guild.roles.everyone, { ViewChannel: false });
                        })
                        interaction.guild.channels.create({name: "📍 • Bilgilendirme", type: ChannelType.GuildCategory}).then(katagori1 => {
                            interaction.guild.channels.create({name: "kurallar", type: ChannelType.GuildText}).then(kurallar => {
                                const embed = new EmbedBuilder()
            .setTitle(`${interaction.guild.name} Kuralları;`)
            .setDescription(`
            ||

||*Biz bir topluluğuz, topluluk olarak bize katılmaya karar veren herkes için güvenli bir ortam sağlamalıyız. Bununla birlikte sunucu yapısını kuran kurallarımız var. Bu sunucu kuralları gelecekte değiştirilebilir. Ceza, suça göre değişiklik gösterebilir.*

**__#1. Nefret Söylemine İzin Verilmiyor__**

• Bu sunucuyu herhangi bir şekilde nefret söylemi yaymak için kullanan herkes sunucudan uzaklaştırılacaktır.

• Bir grup insanı yaşam tarzlarına, ırklarına, cinsiyetlerine, cinsel yönelimlerine/kimliklerine vb. göre tehdit edici açıklamalar yapmayın.

• Bu kategoriye giren "şakalar" yapılmasına da izin verilmez. Tarihteki trajik olayları küçümseyen karanlık/acımasız şakalar yapmaktan muaf değilsiniz.

**__#2. Kışkırtıcı/Kaba Davranışlara İzin Verilmez__**

• Kişisel sorunları bu Discord sunucusuna taşımayın. Başka bir sunucu üyesiyle herhangi bir çatışmaya girerseniz cezalandırılırsınız.

• Buna siyaset, inançlar vb. gibi konulardan bahsetmek de dahildir. Bir personel size konuyu bırakmanız için bir şans verir, uymamanız ceza almanıza neden olur.

**__#3. Spam Gönderme/Reklam Yapılmasına İzin Verilmez__**

• Metin kanallarının reklam/saçmalıklarla dolup taşmasına izin verilmez. İnsanların düzgün bir şekilde sohbet edebilmesini engeller.

• Gereksiz spoiler, aşırı CaPs lOcK, epilepsiye neden olabilecek emoji, gif kullanılmasına izin verilmez.

• Reklama izin verilmez, nokta. Kişilerin doğrudan mesajları yoluyla reklam yapmak da yasaklanmanızla sonuçlanacaktır. Uyarı değil, sessize alma değil, yasaklama.

• Flood yapmanıza da spam yapmanız şeklinde bakacağız.

**__#4. Doxxing'e İzin Verilmiyor__**

• İnsanların gizliliğini ciddiye alıyoruz, kişisel bilgilerinizi ifşa ederken yakalanırsanız yasaklanacaksınız. Discord'un Hizmet Şartlarına aykırıdır.

• Yaş, ad, soyad, adres vb. kişisel bilgileri istemek ağır bir cezaya neden olabilir. Moderatörün, yalnızca reşit olmadıklarından şüpheleniyorlarsa kişilere yaşlarını sormalarına izin verilir.
            `)
            .setColor("BLURPLE")
            kurallar.send({embeds: [embed]})
            kurallar.setParent(katagori1.id)
            })
            interaction.guild.channels.create({name: "duyurular", type: ChannelType.GuildText}).then(duyuru => {
            duyuru.setParent(katagori1.id)
            })
            interaction.guild.channels.create({name: "giriş-çıkış", type: ChannelType.GuildText}).then(hg => {
                db.set(`hgbb_${interaction.guild.id}`, hg.id)
                hg.send("• Giriş-Çıkış sistemini senin için ayarladım.")
                hg.setParent(katagori1.id)
                })
                interaction.guild.channels.create({name: "oto-rol", type: ChannelType.GuildText}).then(rol => {
                    rol.send("• /oto-rol yazarak bu sistemi açabilirsin.")
                    rol.setParent(katagori1.id)
                    })
            interaction.guild.channels.create({name: "oylama", type: ChannelType.GuildText}).then(oylama => {
                oylama.setParent(katagori1.id)
                })
                interaction.guild.channels.create({name: "çekiliş", type: ChannelType.GuildText}).then(giveaway => {
                    giveaway.setParent(katagori1.id)
                    })
            })
            interaction.guild.channels.create({name: "📍 • Genel", type: ChannelType.GuildCategory}).then(katagori2 => {
            interaction.guild.channels.create({name: "sohbet", type: ChannelType.GuildText}).then(sohbet => {
                const embed2 = new EmbedBuilder()
                .setDescription("• Senin için gereken şeyleri ayarladım ve sunucunu kurdum.")
                .setColor(0x323338)
                sohbet.send({embeds: [embed2]})
                sohbet.send("İlk mesajınız benden! :tada:")
            sohbet.setParent(katagori2)
            })
            interaction.guild.channels.create({name: "galeri", type: ChannelType.GuildText}).then(galeri => {
            galeri.setParent(katagori2)
            })
            interaction.guild.channels.create({name: "bot-komut", type: ChannelType.GuildText}).then(botkomut => {
            botkomut.setParent(katagori2)
            })
            interaction.guild.channels.create({name: "sunucu-destek", type: ChannelType.GuildText}).then(destek => {
            destek.setParent(katagori2)
            })
            })
            interaction.guild.channels.create({name: "📍 • Sesli Sohbet", type: ChannelType.GuildCategory}).then(katagori3 => {
                interaction.guild.channels.create({name: "Sohbet 1", type: ChannelType.GuildVoice}).then(sohbet1 => {
                sohbet1.setParent(katagori3)
                })
                interaction.guild.channels.create({name: "Sohbet 2", type: ChannelType.GuildVoice}).then(sohbet2 => {
                    sohbet2.setParent(katagori3)
                    })
                    interaction.guild.channels.create({name: "Sohbet 3", type: ChannelType.GuildVoice}).then(sohbet3 => {
                        sohbet3.setParent(katagori3)
                        })
                        interaction.guild.channels.create({name: "Toplantı 1", type: ChannelType.GuildVoice}).then(toplantı => {
                            toplantı.setParent(katagori3)
                            })
                            interaction.guild.channels.create({name: "Toplantı 2", type: ChannelType.GuildVoice}).then(toplantı1 => {
                                toplantı1.setParent(katagori3)
                                })
            })
            
            interaction.guild.roles.create({ name: 'Owner', color: "#000000", permissions: [PermissionsBitField.Flags.Administrator]}).then(rol => {
                client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.guild.ownerId).roles.add(rol)
                })
            interaction.guild.roles.create({ name: 'Admin', color: "#9582e4", permissions: [PermissionsBitField.Flags.ManageGuild, PermissionsBitField.Flags.BanMembers, PermissionsBitField.Flags.SendMessages]});
            interaction.guild.roles.create({ name: 'Moderator', color: "#4465f0", permissions: [PermissionsBitField.Flags.ManageMessages, PermissionsBitField.Flags.KickMembers, PermissionsBitField.Flags.SendMessages]});
            interaction.guild.roles.create({ name: 'Staff', color: "#D2A3EC", permissions: [PermissionsBitField.Flags.ManageRoles, PermissionsBitField.Flags.SendMessages]});
            interaction.guild.roles.create({ name: 'Friend', color: "#F4B3CA", permissions: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]});
            interaction.guild.roles.create({ name: 'Member', color: "White", permissions: [PermissionsBitField.Flags.SendMessages]});
            interaction.guild.roles.create({ name: 'Mute', color: "#f00000", permissions: [PermissionsBitField.Flags.MuteMembers]});
            }
        
            if (interaction.customId === "sunucukurred_"+interaction.user.id) {
              interaction.update({content: `• Sunucu-kur işlemi reddedildi.`, embeds: [], components: []})
            } 
            
  
  
    };
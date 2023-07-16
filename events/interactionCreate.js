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
                        interaction.guild.channels.create({name: "▬▬ ÖNEMLİ ▬▬", type: ChannelType.GuildCategory}).then(katagori1 => {
                            interaction.guild.channels.create({name: "📜・Kurallar", type: ChannelType.GuildText}).then(kurallar => {
                                const embed = new EmbedBuilder()
            .setTitle(':blue_book:  Sunucu Kuralları  :blue_book:')
            .setDescription(`
            **__${interaction.guild.name} Sunucu Kuralları__**                                    
            \`1)\` :blue_book: **・ Yetkililere Etiket Atmak Yasak! ・\`Mute\`・**
            \`2)\` :blue_book: **・ Küfür, Argo Kullanımı Yasak! ・\`Mute\`・**
            \`3)\` :blue_book: **・ Siyaset, Irkçılık ve Dini Konuları Konuşmak Yasak!  ・\`Ban\`・**
            \`4)\` :blue_book: **・ Reklam Yapmak Yasak! ・\`Ban\`・**
            \`5)\` :blue_book: **・ Flood Yapmak Yasak! ・\`Mute\`・**
            \`6)\` :blue_book: **・ Caps Lock ile Yazmak Yasak! ・\`Mute\`・**
            \`7)\` :blue_book: **・ Yetkilileri Dinlememek Yasak! ・\`Mute\`・**
            \`8)\` :blue_book: **・**\`Kurallara Herkes Uymak Zorundadır. Kuralları Okumayanlar, Bilmeyenler Yetkililerimizin Gözünde Okumuş Olarak Kabul Edilecektir.\`
            `)
            kurallar.send({embeds: [embed]})
            kurallar.setParent(katagori1.id)
            })
            interaction.guild.channels.create({name: "duyurular", type: ChannelType.GuildText}).then(duyuru => {
            duyuru.setParent(katagori1.id)
            })
            interaction.guild.channels.create({name: "giriş-çıkış", type: ChannelType.GuildText}).then(hg => {
                db.set(`hgbb_${interaction.guild.id}`, hg.id)
                hg.send("Buraya bakmana gerek yok! Senin için giriş çıkış sistemini ayarladım bile!")
                hg.setParent(katagori1.id)
                })
                interaction.guild.channels.create({name: "oto-rol", type: ChannelType.GuildText}).then(rol => {
                    rol.send("**/oto-rol** Yazarak otomatik rolü ayarlayabilirsin.")
                    rol.setParent(katagori1.id)
                    })
            interaction.guild.channels.create({name: "oylama", type: ChannelType.GuildText}).then(oylama => {
                oylama.setParent(katagori1.id)
                })
                interaction.guild.channels.create({name: "giveaway", type: ChannelType.GuildText}).then(giveaway => {
                    giveaway.setParent(katagori1.id)
                    })
            })
            interaction.guild.channels.create({name: "📍 • GENEL", type: ChannelType.GuildCategory}).then(katagori2 => {
            interaction.guild.channels.create({name: "sohbet", type: ChannelType.GuildText}).then(sohbet => {
                const embed2 = new EmbedBuilder()
                .setDescription("• Senin için gereken şeyleri ayarladım ve sunucunu kurdum.")
                .setColor("#323338")
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
            
            interaction.guild.roles.create({ name: 'Owner', color: "Black", permissions: [PermissionsBitField.Flags.Administrator]}).then(rol => {
                client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.guild.ownerId).roles.add(rol)
                })
            interaction.guild.roles.create({ name: 'Admin', color: "#9582e4", permissions: [PermissionsBitField.Flags.ManageGuild, PermissionsBitField.Flags.BanMembers, PermissionsBitField.Flags.SendMessages]});
            interaction.guild.roles.create({ name: 'Moderator', color: "#4465f0", permissions: [PermissionsBitField.Flags.ManageMessages, PermissionsBitField.Flags.KickMembers, PermissionsBitField.Flags.SendMessages]});
            interaction.guild.roles.create({ name: 'Staff', color: "#D2A3EC", permissions: [PermissionsBitField.Flags.ManageRoles, PermissionsBitField.Flags.SendMessages]});
            interaction.guild.roles.create({ name: 'Friend', color: "#F4B3CA", permissions: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]});
            interaction.guild.roles.create({ name: 'Member', color: "White", permissions: [PermissionsBitField.Flags.SendMessages]});
            interaction.guild.roles.create({ name: 'Mute', color: "Grey", permissions: [PermissionsBitField.Flags.MuteMembers]});
            }
        
            if (interaction.customId === "sunucukurred_"+interaction.user.id) {
              interaction.update({content: `<:tik:1039607067729727519> | Başarılı bir şekilde sunucu kurma iptal edildi!`, embeds: [], components: []})
            } 
            
  
  
    };
const { Collection, EmbedBuilder, Client, Interaction, MessageButton, MessageActionRow } = require("discord.js");
const db = require("croxydb");
const Discord = require("discord.js");
const { readdirSync } = require("fs");
const { colors, fromIntToDate } = require('discord-toolbox');
const config = require('../config.json');
const moment = require('moment');
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ChannelType, PermissionsBitField } = require('discord.js');


module.exports = async (client, interaction) => {

  if (interaction.isCommand()) {
    if (!interaction.guildId) return;

    readdirSync('./commands').forEach(f => {
      const cmd = require(`../commands/${f}`);

      if (interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {
        return cmd.run(client, interaction, db);
      }
    });
  }

  const butonrol = db.fetch(`buton_rol${interaction.guild.id}`);

  if (interaction.customId === "rol") {
    if (!interaction.member.roles.cache.has(butonrol)) {
      interaction.member.roles.add(butonrol);
      interaction.reply({ content: `• Butona tıkladığın için sana <@&${butonrol}> rolünü verdim.`, ephemeral: true });
    } else {
      interaction.member.roles.remove(butonrol);
      interaction.reply({ content: `• Butona tıkladığın için senden <@&${butonrol}> rolünü geri aldım.`, ephemeral: true });
    }
  }

  if (!interaction.isButton()) return;

  if (interaction.customId === "sunucukuronay_" + interaction.user.id) {
    interaction.guild.channels.cache.forEach((channel) => {
      if (channel.deletable) channel.delete();
    });

    interaction.guild.roles.cache.forEach((role) => {
      if (role.deletable) role.delete();
    });

    interaction.guild.channels.create("özel-chat", { type: "GUILD_TEXT" }).then(channel => {
      channel.permissionOverwrites.create(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
    });

    interaction.guild.channels.create("📍 • Bilgilendirme", { type: "GUILD_CATEGORY" }).then(katagori1 => {
      interaction.guild.channels.create("kurallar", { type: "GUILD_TEXT" }).then(kurallar => {
        const embed = new EmbedBuilder()
          .setTitle(`${interaction.guild.name} Kuralları;`)
          .setDescription("SA")
          .setColor("#7289da");
        kurallar.send({ embeds: [embed] });
        kurallar.setParent(katagori1.id);
      });

      interaction.guild.channels.create("duyurular", { type: "GUILD_TEXT" }).then(duyuru => {
        duyuru.setParent(katagori1.id);
      });

      interaction.guild.channels.create("giriş-çıkış", { type: "GUILD_TEXT" }).then(hg => {
        db.set(`hgbb_${interaction.guild.id}`, hg.id);
        hg.send("• Giriş-Çıkış sistemini senin için ayarladım.");
        hg.setParent(katagori1.id);
      });

      interaction.guild.channels.create("oto-rol", { type: "GUILD_TEXT" }).then(rol => {
        rol.send("• /oto-rol yazarak bu sistemi açabilirsin.");
        rol.setParent(katagori1.id);
      });

      interaction.guild.channels.create("oylama", { type: "GUILD_TEXT" }).then(oylama => {
        oylama.setParent(katagori1.id);
      });

      interaction.guild.channels.create("çekiliş", { type: "GUILD_TEXT" }).then(giveaway => {
        giveaway.setParent(katagori1.id);
      });
    });

    interaction.guild.channels.create("📍 • Genel", { type: "GUILD_CATEGORY" }).then(katagori2 => {
      interaction.guild.channels.create("sohbet", { type: "GUILD_TEXT" }).then(sohbet => {
        const embed2 = new EmbedBuilder()
          .setDescription("• Senin için gereken şeyleri ayarladım ve sunucunu kurdum.")
          .setColor("#323338");
        sohbet.send({ embeds: [embed2] });
        sohbet.send("İlk mesajınız benden! :tada:");
        sohbet.setParent(katagori2.id);
      });

      interaction.guild.channels.create("galeri", { type: "GUILD_TEXT" }).then(galeri => {
        galeri.setParent(katagori2.id);
      });

      interaction.guild.channels.create("bot-komut", { type: "GUILD_TEXT" }).then(botkomut => {
        botkomut.setParent(katagori2.id);
      });

      interaction.guild.channels.create("sunucu-destek", { type: "GUILD_TEXT" }).then(destek => {
        destek.setParent(katagori2.id);
      });
    });

    interaction.guild.channels.create("📍 • Sesli Sohbet", { type: "GUILD_CATEGORY" }).then(katagori3 => {
      interaction.guild.channels.create("Sohbet 1", { type: "GUILD_VOICE" }).then(sohbet1 => {
        sohbet1.setParent(katagori3.id);
      });

      interaction.guild.channels.create("Sohbet 2", { type: "GUILD_VOICE" }).then(sohbet2 => {
        sohbet2.setParent(katagori3.id);
      });

      interaction.guild.channels.create("Sohbet 3", { type: "GUILD_VOICE" }).then(sohbet3 => {
        sohbet3.setParent(katagori3.id);
      });

      interaction.guild.channels.create("Toplantı 1", { type: "GUILD_VOICE" }).then(toplantı => {
        toplantı.setParent(katagori3.id);
      });

      interaction.guild.channels.create("Toplantı 2", { type: "GUILD_VOICE" }).then(toplantı1 => {
        toplantı1.setParent(katagori3.id);
      });
    });

    interaction.guild.roles.create({ name: 'Owner', color: "#000000", permissions: [PermissionsBitField.FLAGS.ADMINISTRATOR] }).then(rol => {
      client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.guild.ownerId).roles.add(rol);
    });

    interaction.guild.roles.create({ name: 'Admin', color: "#9582e4", permissions: [PermissionsBitField.FLAGS.MANAGE_GUILD, PermissionsBitField.FLAGS.BAN_MEMBERS, PermissionsBitField.FLAGS.SEND_MESSAGES] });
    interaction.guild.roles.create({ name: 'Moderator', color: "#4465f0", permissions: [PermissionsBitField.FLAGS.MANAGE_MESSAGES, PermissionsBitField.FLAGS.KICK_MEMBERS, PermissionsBitField.FLAGS.SEND_MESSAGES] });
    interaction.guild.roles.create({ name: 'Staff', color: "#D2A3EC", permissions: [PermissionsBitField.FLAGS.MANAGE_ROLES, PermissionsBitField.FLAGS.SEND_MESSAGES] });
    interaction.guild.roles.create({ name: 'Friend', color: "#F4B3CA", permissions: [PermissionsBitField.FLAGS.VIEW_CHANNEL, PermissionsBitField.FLAGS.SEND_MESSAGES] });
    interaction.guild.roles.create({ name: 'Member', color: "#FFFFFF", permissions: [PermissionsBitField.FLAGS.SEND_MESSAGES] });
    interaction.guild.roles.create({ name: 'Mute', color: "#FFFFFF", permissions: [PermissionsBitField.FLAGS.MUTE_MEMBERS] });
  }

  if (interaction.customId === "sunucukurred_" + interaction.user.id) {
    interaction.update({ content: `• Sunucu-kur işlemi reddedildi.`, embeds: [], components: [] });
  }

};

const { Collection, EmbedBuilder, Client, Interaction, MessageButton, MessageActionRow } = require("discord.js");
const db = require("croxydb");
const Discord = require("discord.js");
const { readdirSync } = require("fs");
const { colors, fromIntToDate } = require('discord-toolbox');
const config = require('../config.json');
const moment = require('moment');

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

  
  if(interaction.customId == 'ticketform'){
    
  const ticketSystem = db.fetch(`ticketSystem_${interaction.guild.id}`)


  const lvl = db.fetch(`ticketLvl_${interaction.guild.id}`) || 0;

  db.add(`ticketLvl_${interaction.guild.id}`, 1)


  const ticketYetkili = await interaction.guild.roles.cache.find(ticketSystem.yetkili);

  const ticketCategory = db.fetch(`ticketCategory_${interaction.guild.id}`);

  const ticketsebep = interaction.fields.getTextInputValue('ticketInput');
 const channel = await interaction.guild.channels.create({
   name: `talep-${interaction.user.username}-`+lvl,
   type: Discord.ChannelType.GuildText,
   parent: ticketCategory.category,
   permissionOverwrites: [
     {
       id: interaction.guild.id,
       deny: [Discord.PermissionsBitField.Flags.ViewChannel],
     },
      {
       id: interaction.user.id,
       allow: [Discord.PermissionsBitField.Flags.ViewChannel, Discord.PermissionsBitField.Flags.SendMessages],
     },
     {
      id: ticketYetkili.id,
      allow: [Discord.PermissionsBitField.Flags.ViewChannel, Discord.PermissionsBitField.Flags.SendMessages],
     },
   ],
 });
 const sebepTicket = new Discord.EmbedBuilder()
 .setDescription(`Neden talep açtınız?\n> \`${ticketsebep}\``)
 .setColor("#323338")
 const ticketUserEmbed = new Discord.EmbedBuilder()
 .setAuthor({ name: `${interaction.user.username} | Talep açıldı`, iconURL: `${interaction.user.displayAvatarURL({ dynmaic: true })} ` })
 .setThumbnail(interaction.guild.iconURL({ dynmaic: true }))
 .addFields([ 
  { name: "Oluşturan:", value: `${interaction.user}`, inline: true },
  { name: "Açılış zamanı:", value: `<t:${parseInt(channel.createdTimestamp / 1000)}:R>`, inline: true }
 ])
 .setColor('#32338')
 .setTimestamp()
 
 const row = new Discord.ActionRowBuilder()
 .addComponents(
   new Discord.ButtonBuilder()
     .setCustomId(`ticketClose_everyone`)
     .setLabel('Kapat')
     .setEmoji("❌️")
     .setStyle(Discord.ButtonStyle.Secondary),
 );
 
  interaction.reply({ content: `${channel}`, ephemeral: true })

  db.set(`ticketChannelUser_${interaction.guild.id}${channel.id}`, { user: interaction.user.id })
  db.set(`ticketUser_${interaction.user.id}${interaction.guild.id}`, { whOpen: interaction.user.id, date: Date.now() })

  channel.send({ content: `<@${interaction.user.id}> | ${ticketYetkili}`, embeds: [ticketUserEmbed] })
  return channel.send({ embeds: [sebepTicket], components: [row]  })

};  
};

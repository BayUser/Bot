const { PermissionsBitField, ChannelType, EmbedBuilder } = require("discord.js");
const db = require('croxydb');
const Discord = require('discord.js');
const { Permissions } = require("discord.js")
module.exports = {
    name:"sunucu-kur",
    description: 'Sunucu-Kur komutu.',
    type:1,
    options: [],
  run: async(client, interaction) => {

    if(interaction.user.id != interaction.guild.ownerId) return interaction.reply('• Bu komut için yeterli yetkiye sahip değilsin.')


    const row = new Discord.ActionRowBuilder()
    .addComponents(
        new Discord.ButtonBuilder()
            .setCustomId('sunucukuronay_'+interaction.user.id)
            .setLabel('Onayla')
            .setEmoji("1127982524921024582")
            .setStyle('Success'),
        new Discord.ButtonBuilder()
            .setCustomId('sunucukurred_'+interaction.user.id)
            .setLabel('İptal')
            .setEmoji("1130053792558223381")
            .setStyle('Danger'),

    );


interaction.reply({ content: "• Sunucuyu kurmak istediğinizden eminmisiniz?(Sunucudaki herşey silinecek)", components: [row] })
}

};
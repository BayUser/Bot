const { Collection, Client } = require("discord.js");
const db = require("croxydb");
const { readdirSync } = require("fs");
const config = require('../config.json');

module.exports = async (client, interaction) => {
  if (interaction.isCommand()) {
    if (!interaction.guildId) return;

    readdirSync('./commands').forEach(file => {
      const command = require(`../commands/${file}`);

      if (interaction.commandName.toLowerCase() === command.name.toLowerCase()) {
        return command.run(client, interaction, db);
      }
    });
  }

  const butonrol = db.fetch(`buton_rol${interaction.guild.id}`);

  if (interaction.isButton()) {
    if (!interaction.member.roles.cache.has(butonrol)) {
      await interaction.member.roles.add(butonrol);
      interaction.reply({ content: "<:tik:1039607067729727519> | Rol Başarıyla Verildi!", ephemeral: true });
    } else {
      await interaction.member.roles.remove(butonrol);
      interaction.reply({ content: "<:carpi:1040649840394260510> | Rol Başarıyla Alındı!", ephemeral: true });
    }
  }
};

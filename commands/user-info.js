const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder, Colors } = require("discord.js");

module.exports = {
  name:"kullanıcı-bilgi",
  description:"Kullanıcı-Bilgi komutu.",
  type:1,
  option:[
    {
      name:"user",
      description:"Kullanıcı-Bilgi seçeneği.",
      type:6,
      required:true
    }
  ],

  run: async (client, interaction) => {
    //v14 run function
    const user = interaction.options.getUser("user") || interaction.user;
    const member = interaction.guild.members.cache.get(user.id);
    //flags
    const userFlags = user.flags
      .toArray()
      .map((mr) =>
        mr
          .replace("HypeSquadOnlineHouse1", "<:HouseBravery:1072862165788266546>")
          .replace("HypeSquadOnlineHouse2", "<:HouseBrilliance:1072862230766419968>")
          .replace("HypeSquadOnlineHouse3", "<:HouseBalance:1072862127741734973>")
          .replace("VerifiedDeveloper", "<:ddevbadge:1048692611554213988>")
          .replace("Hypesquad", "<:hypesquadbadge:1048692727270883338>")
          .replace("PremiumEarlySupporter", "<:esupbadge:1048692795604467764>")
          .replace("BugHunterLevel1", "<:bughbadge:1048692857059410012>")
          .replace("BugHunterLevel2", "<:bugh2badge:1048692871244550294>")
          .replace("CertifiedModerator", "<:modbadge:1048693088958283857>")
          .replace("Staff", "<:staffbadge:1048692932875657276> ")
          .replace("Partner", "<:partnerbadge:1048693199876669490>")
          .replace("ActiveDeveloper", "<:activedeveloper:1048693433746854000>")
      )
      .join(" ");
    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Profile`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        {
          name: "User tag",
          value: user.tag,
          inline: true,
        },
        {
          name: "Nickname",
          value: member?.nickname || "None",
          inline: true,
        },
        {
          name: "Joined server",
          value: `<t:${Math.floor(
            new Date(member?.joinedTimestamp) / 1000
          )}:R>`,
          inline: true,
        },
        {
          name: "Joined Discord",
          value: `<t:${Math.floor(new Date(user.createdTimestamp) / 1000)}:R>`,
          inline: true,
        },
        {
          name: "Roles",
          value:
            `(${
              member?.roles?.cache.filter((x) => x.name !== "@everyone").size
            }) ${member?.roles?.cache
              .filter((x) => x.name !== "@everyone")
              .sort((a, b) => b.rawPosition - a.rawPosition)
              .map((x) => x)
              .slice(0, 2)}` || "None",
          inline: true,
        },
        {
          name: "Rozetler",
          value: userFlags || "None",
          inline: true,
        }
      )
      .setColor(Colors.Blurple)
      .setFooter({
        text: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      });

    interaction.reply({ embeds: [embed] });
  },


};
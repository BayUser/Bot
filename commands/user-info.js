const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder, Colors } = require("discord.js");

module.exports = {
  name:"kullanıcı-bilgi",
  description:"Kullanıcı-Bilgi komutu.",
  type:1,
  options:[
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
          )
      .join(" ");
    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Profile`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        {
          name: "Kullanıcı Etiketi",
          value: user.tag,
          inline: true,
        },
        {
          name: "Kullanıcı Adı",
          value: member?.nickname || "None",
          inline: true,
        },
        {
          name: "Sunucuya Katılma Tarihi",
          value: `<t:${Math.floor(
            new Date(member?.joinedTimestamp) / 1000
          )}:R>`,
          inline: true,
        },
        {
          name: "Discord'a Katılma Tarihi",
          value: `<t:${Math.floor(new Date(user.createdTimestamp) / 1000)}:R>`,
          inline: true,
        },
        {
          name: "Roller",
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
      .setColor("#323338")
      .setFooter({
        text: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      });

    interaction.reply({ embeds: [embed] });
  },


};
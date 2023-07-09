const Discord = require("discord.js")
const louritydb = require("croxydb");
const { messageLink } = require("discord.js");

module.exports = {
    name: "botlist",
    description: "Botlist komutu.",
    type: 1,
    options: [
        {
            name: "botlist-log",
            description: "Botlist-Log seçeneği.",
            type: 7,
            required: true,
            channel_types: [0]

        },

        {

            name: "bot-rolü",
            description: "Bot-Rolü seçeneği.",
            type: 8,
            required: true

        },

        {

            name: "developer-rolü",
            description: "Developer-Rol seçeneği.",
            type: 8,
            required: true

        },

        {

            name: "yetkili-rolü",
            description: "Yetkili-Rolü komutu.",
            type: 8,
            required: true,

        },

        {

            name: "onay-kanalı",
            description: "Onay-Kanalı seçeneği",
            type: 7,
            required: true,
            channel_types: [0]

        },

        {

            name: "botekle-kanalı",
            description: "Botekle-Kanal seçeneği.",
            type: 7,
            required: true,
            channel_types: [0]

        },


        {

            name: "ayrıldı-log",
            description: "Ayrıldı-Log komutu.",
            type: 7,
            required: true,
            channel_types: [0]
        }


    ],
    run: async (client, interaction) => {


        if (!interaction.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return interaction.reply({ content:"• Bu işlem için yeterli yetkiye sahip değilsin.", ephemeral: true })
        const row1 = new Discord.ActionRowBuilder()


            .addComponents(
                new Discord.ButtonBuilder()
                    .setEmoji("⚙️")
                    .setLabel("Ayarlar")
                    .setStyle(Discord.ButtonStyle.Secondary)
                    .setCustomId("ayarlar")

            )



            .addComponents(
                new Discord.ButtonBuilder()
                    .setEmoji("🗑️")
                    .setLabel("Sistemi Sıfırla")
                    .setStyle(Discord.ButtonStyle.Danger)
                    .setCustomId("kapat")

            )



        const basarili = new Discord.EmbedBuilder()

            .setColor("Green")
            .setDescription("> • Botlist sistemi ayarlandı.")
            .setFooter({ text: "Mechatron | BotList" })

        interaction.reply({ embeds: [basarili], components: [row1] })



        const log = interaction.options.getChannel('botlist-log')
        const botRol = interaction.options.getRole('bot-rolü')
        const devRol = interaction.options.getRole('developer-rolü')
        const adminRol = interaction.options.getRole('yetkili-rolü')
        const onay = interaction.options.getChannel('onay-kanalı')
        const botekle = interaction.options.getChannel('botekle-kanalı')
        const ayrildiLog = interaction.options.getChannel('ayrıldı-log')



        louritydb.set(`log_${interaction.guild.id}`, log.id)
        louritydb.set(`botRol_${interaction.guild.id}`, botRol.id)
        louritydb.set(`devRol_${interaction.guild.id}`, devRol.id)
        louritydb.set(`adminRol_${interaction.guild.id}`, adminRol.id)
        louritydb.set(`onay_${interaction.guild.id}`, onay.id)
        louritydb.set(`botekle_${interaction.guild.id}`, botekle.id)
        louritydb.set(`ayrildiLog_${interaction.guild.id}`, ayrildiLog.id)

    }

}

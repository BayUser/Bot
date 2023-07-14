const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
module.exports = {
    name: "ticket-sistemi",
    description: "Ticket komutu.",
    type: 1,
    options: [
        {
            name: "kanal",
            description: "Ticket seçeneği.",
            type: 7,
            required: true,
            channel_types: [0]
        },
        {
            name: "log-kanalı",
            description: "Ticket seçeneği.",
            type: 7,
            required: true,
            channel_types: [0]
        },
        {
            name: "yetkili-rol",
            description: "Ticket seçeneği.",
            type: 8,
            required: true,
        },
    ],
    // 
    run: async (client, interaction) => {

        const { user, customId, guild } = interaction;
    
        const ticketkanal = interaction.options.getChannel('kanal')
        const logkanal = interaction.options.getChannel('log-kanalı')
        const rol = interaction.options.getRole('yetkili-rol')

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content:"• Bu komut için yeterli yetkiye sahip değilsin." })
			
		        const ticketSystem = db.fetch(`ticketSystem_${interaction.guild.id}`)
        const ticketSystemDate = db.fetch(`ticketSystemDate_${interaction.guild.id}`)
        
        if (ticketSystem && ticketSystemDate) {
            const date = new EmbedBuilder()
            .setDescription(`• Sistem daha önce zaten açılmış.`)
        
        return interaction.reply({ embeds: [date] })
        }

        const category = await guild.channels.create({
            name: 'TICKET',
            type: Discord.ChannelType.GuildCategory,
            permissionOverwrites: [
              {
                id: interaction.guild.id,
                deny: [Discord.PermissionsBitField.Flags.ViewChannel],
              },
            ],
          });    

        const basarili = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`• Ticket sistemi ayarlandı.`)
            db.set(`ticketKanal_${interaction.guild.id}`, logkanal.id)
            db.set(`ticketSystem_${interaction.guild.id}`, { yetkili: rol.id, ticketchannel: ticketkanal.id })
            db.set(`ticketCategory_${interaction.guild.id}`, { category:  category.id, log: logkanal.id });
			db.set(`ticketSystemDate_${interaction.guild.id}`, { date: Date.now() })

            const menu = new Discord.EmbedBuilder()
            .setColor("#323338")
            .setTitle("Destek Talebi")
            .setDescription("> Aşağıdaki butona basarak destek ta")
			.setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .setFooter({ text: "Silex" })
  
        const row11 = new Discord.ActionRowBuilder()
  
            .addComponents(
                new Discord.ButtonBuilder()
                    .setEmoji("1044325577064190033")
                    .setLabel("Destek Talebi Oluştur")
                    .setStyle(Discord.ButtonStyle.Secondary)
                    .setCustomId("ticketolustur_everyone"),
                new Discord.ButtonBuilder()
                    .setEmoji("1039607065045385256")
                    .setLabel("Nasıl oluşturabilirim?")
                    .setStyle(Discord.ButtonStyle.Secondary)
                    .setCustomId("ticketnasilacilir_everyone")
            )

            ticketkanal.send({ embeds: [menu], components: [row11] })
        return interaction.reply({ embeds: [basarili], ephemeral: true }).catch((e) => { })

    }

};
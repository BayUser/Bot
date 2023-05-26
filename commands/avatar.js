const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"avatar",
    description: 'Avatar komutu.',
    type:1,
    options: [
        {
            name:"user",
            description:"Avatarına bakmak istediğin kullanıcıyı etiketle.",
            type:6,
            required:true
        },
      
    ],
  run: async(client, interaction) => {

    const user = interaction.options.getMember('user')
   
    interaction.reply(user.displayAvatarURL({ dynamic: true, size: 1024 }))
}

};
//ANKA CODE
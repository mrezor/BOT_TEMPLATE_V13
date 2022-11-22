const { MessageEmbed } = require('discord.js');
const config = require('../../../config');


class command {
    constructor() {
        this.name = "ping",
        this.description = "Permets de voir le ping du bot."
    }

    async execute(bot, interaction) {
        const PING = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('**Ping**')
            .setDescription("🏓 Pong")
            .addFields(
                { name: '🔧 - Latence :', value: `${Date.now() - interaction.createdTimestamp}ms.` },
            )
            .setTimestamp()
            .setFooter({ text: config.clients.name, iconURL: config.clients.logo});

        interaction.reply({ embeds: [PING] });
    }
}

module.exports = command
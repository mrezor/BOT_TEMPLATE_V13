const config = require('../../config');


module.exports = {
    name: 'ready',
    execute(client) {
        console.log(`Connectés à ${client.user.username} !\n-> Le bot est utilisé sur ${client.guilds.cache.size} serveurs !`);

        client.user.setPresence({ activities: [{ name: config.clients.activity, type: 'WATCHING'}] });
    }
}
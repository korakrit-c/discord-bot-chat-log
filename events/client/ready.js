const DISCORDJS_VERSION = require("discord.js").version;

module.exports = {
    name: "ready",
    description: "ready",
    once: true,
    async execute(client) {
        client.user.setStatus("invisible");
        console.info(`Discord.js v${DISCORDJS_VERSION}`)
        console.info(`Logged in as ${client.user.tag}!`);
        const Guilds = client.guilds.cache.map(guild => guild); // guild.name
        Guilds.forEach(guild => {
            console.info(`[${guild.id}] ${guild.name}`);
        });
        console.info(`#########################################`);
    }
}

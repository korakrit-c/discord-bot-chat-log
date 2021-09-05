const fs = require("fs");

module.exports = (client, Discord) => {
    const loadDirectory = (dirs) => {
        const eventFiles = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith(".js"));
        for (const file of eventFiles) {
            const event = require(`../events/${dirs}/${file}`);

            if(event.once){
                client.once(event.name, (...args) => event.execute(...args));
            } else {
                client.on(event.name, (...args) => event.execute(...args));
                //client.on(event.name, event.execute.bind(null, Discord, client));
            }
        }
    }
    ['client', 'guild'].forEach(e => loadDirectory(e));
}
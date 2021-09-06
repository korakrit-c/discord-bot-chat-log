const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();

const client = new Discord.Client({
    intents: [
            Discord.Intents.FLAGS.GUILDS,
            Discord.Intents.FLAGS.GUILD_MEMBERS,
            Discord.Intents.FLAGS.GUILD_VOICE_STATES,
            Discord.Intents.FLAGS.GUILD_MESSAGES,
            Discord.Intents.FLAGS.DIRECT_MESSAGES,
            Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
            Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    partials: [
        "CHANNEL"
    ]
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


["CustomCommandHandler", "EventHandler"].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});


// Deploy Slash Commands
["DeploySlashCommand"].forEach(handler => {
    require(`./handlers/${handler}`);
});

client.login(process.env.TOKEN);


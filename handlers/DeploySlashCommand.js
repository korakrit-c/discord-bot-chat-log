const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require("dotenv").config();

const clientId = process.env.APPLICATIONID;
const guildId = process.env.GUILDID;
const token = process.env.TOKEN;

const commands = [];
const commandFiles = fs.readdirSync('./commands/slash/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`../commands/slash/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log('Successfully registered application commands.');
    } catch (error) {
        console.error(error);
    }
})();

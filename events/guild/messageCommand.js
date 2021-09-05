require("dotenv").config();
module.exports = {
    name: "messageCreate",
    description: "Message prefix",
    once: false,
    async execute(message) {
        const prefix = process.env.PREFIX;
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        const command = message.client.commands.get(cmd);
    }
}

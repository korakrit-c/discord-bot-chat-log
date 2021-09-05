const execute = async (message) => {
    if (message.author.bot) return;
    
    // Guild Info
    const guildId = message.guildId;
    const guildName = message.guild.name;
    // Channel Info
    const channelId = message.channelId;
    const channelName = message.channel.name;
    // User Info
    const authorId = message.author.id;
    const authorDiscriminator = message.author.discriminator;
    const authorUsername = message.author.username;
    // Message Info
    const messageCreateAt = message.createdAt;
    const messageTimestamp = message.createdTimestamp;
    const messageId = message.id;
    const messageType = message.type; //DEFAULT, REPLY
    const messageRef = (message.reference?.messageId) ? message.reference.messageId : null;
    const messageContent = message.content;

    // Print
    console.log(`${messageCreateAt}`)
    console.log(`[${guildName}] [${authorUsername}#${authorDiscriminator}] [${messageType}]`)
    console.log(`"${messageContent}"`)
}

module.exports = {
    name: "messageCreate",
    description: "Log All Message",
    once: false,
    execute
}

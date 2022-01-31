const { getVoiceConnection } = require('@discordjs/voice')

module.exports = {
    run: async(client, message, args) => {
        const connection = getVoiceConnection(message.guild.id)

        if(!connection) return message.channel.send("Eu não estou em nenhum canal!")

        message.channel.send("Saindo...")
        connection.destroy()
        
    }
}
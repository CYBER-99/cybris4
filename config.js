

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1222520832236978217", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "a32f119d50b040a09b0dd8b3b94176b7",
  spotifyClientSecret : "b582806d94514ce78b16062b9b37f467",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "I AM ATOMIC!", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/my8VBjjCPM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "CYBRIS",
      password: "cybris",
      host: "78.46.65.243",
      port:  3484,
      secure: false
    }
  ]
}

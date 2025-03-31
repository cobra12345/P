

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/b9h2bReAKp",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Avinan",
      password: "avinan",
      host: "new-york-node-1.vortexcloud.xyz",
      port:  5008,
      secure: false
    }
  ]
}

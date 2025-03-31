

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
      name: "Unknownz",
      password: "unknownz",
      host: "de1.bot-hosting.net",
      port:  20773,
      secure: false
    }
  ]
}

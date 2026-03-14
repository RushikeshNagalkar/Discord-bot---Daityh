const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.once("ready", () => {
  console.log("Chotu is online!");
});

client.on("messageCreate", async (message) => {

  if (message.author.bot) return;

  const scrapID = "638631095545626634";

  // special reply for Rahul
  if (message.author.id === scrapID) {

    if (message.content === "!hello") {
      message.reply("बोल रे चमन्या 🐣");
      return;
    }

  }

  if (message.content === "!hello") {
    message.reply("बोला भाऊ ! 🫡");
  }

});

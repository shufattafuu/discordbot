import discord from "discord.js";
import dotenv from "dotenv";

dotenv.config();

let client = new discord.Client({
	intents: ["GUILDS", "GUILD_MESSAGES"]
});

client.login(process.env.BOT_TOKEN);
console.log("Discord bot started");

client.on("messageCreate", async function(message){
});

client.on("ready", async function(){
//	await client.guilds.cache.first().channels.cache.find(x => x.name=== "d").send("hello");
});

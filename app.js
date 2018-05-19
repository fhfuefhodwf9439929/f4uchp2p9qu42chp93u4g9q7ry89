const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
   client.user.setActivity({game: {name: "to unlocate", type: 3}});
   client.user.setStatus("dnd");
  console.log("I'm online!"); // Log a message in the Terminal when the bot is online

});

var prefix = ";"

client.on("message", message => {
  console.log(message.author.username + " said: " + message.content);
  if(message.channel.type === "dm") {
    message.author.sendMessage("MY STATUS IS DO NOT DISTURB. WHAT THE FUCK DONT YOU GET ABOUT THAT?!?!?!?\n\nin other words, i dont respond to people in DMs - unlocate");
    return;
  } // A function for the bot to not respond to anything in Direct Messages
  if(message.author.bot) return; // A function for the bot to not reply to any bot
  if(message.author === client.user) return; // A function for the bot to not respond to itself
  if(!message.content.startsWith(prefix)) return; // A function for the bot to not respond to anything if it doesn't start with the prefix

  let args = message.content.split(" ").slice(1);
  var argresult = args.join(" ");

  const permEmbed = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription(message.author.toString() + ", you do not have the sufficient permissions to use this command.")
    .setColor('#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6))
    .setFooter("Command ran by " + message.author.username)
  // Permission Embed
  if(message.content.startsWith(prefix + "update")) {

if(!message.member.hasPermission("MANAGE_MESSAGES")) {
  message.channel.send(permEmbed)
  return;
}

message.delete();
  const sayEmbed = new Discord.RichEmbed()

    .setDescription(argresult)
    .setColor('#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6))
    client.channels.get("430273616915988481").send(sayEmbed)
  } else

  if(message.content.startsWith(prefix + "setgame")) {
    if (message.author.id !== '359005394900877313') {
      message.channel.send(permEmbed)
      return;
    }
    client.user.setActivity(argresult);
    message.channel.sendMessage(message.author.toString() + `, set my status to: **${argresult}**`);
  }



});



client.login(PROCESS.ENV.TOKEN);

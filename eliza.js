const Discord = require("discord.js");
const client = new Discord.Client();
var ElizaNode = require('elizanode')
var eliza = new ElizaNode();
var initial = eliza.getInitial();

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setGame('psychotherapist bot | e!help');
});

// Set the prefix
client.on("message", (message) => {
  /*
  var inputstring = message.content
  var reply = eliza.transform(inputstring);
  console.log(inputstring + ":  " + reply)
  message.channel.send(reply);*/
  if (message.content.startsWith("e!help")){
    message.channel.send("Hi! My name is Eliza, I am a psychotherapist bot. If you need to talk, I am always here. \n It is easy, just use `e!` command and say anything you want. :heart:");
  }
  else {
    if (message.content.startsWith("e!")) {
      var inputstring = message.content
      var reply = eliza.transform(inputstring);
      console.log(inputstring + ":  " + reply)
      message.channel.send(reply);
      //message.content = false;
    }
  }
  // Exit and stop if the prefix is not there or if user is a bot
  /*
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith("foo")) {
    message.channel.send("bar!");
  }*/
});

client.login("NDQyNjYwODU3NTkyMTUyMDY0.DdCFeg.lJYvmxkLGOWh27-Oxwyg5gX_hZs");

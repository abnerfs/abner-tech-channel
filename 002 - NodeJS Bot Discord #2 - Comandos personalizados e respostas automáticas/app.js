const Discord = require('discord.js');
const client = new Discord.Client();
const random = require('random-number');

const respostas = [
  "Eai cara",
  "Tudo certo",
  "Belezinha?",
  "Tamo junto",
  "ai sim"
]

require('dotenv').config();

const BOT_PREFIX = process.env.BOT_PREFIX;

const answerMention = msg => {
  let indexMsg  = random({
    min: 0,
    max: respostas.length - 1,
    integer: true
  })
  const answer = respostas[indexMsg];
  msg.reply(answer);
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus('dnd');
  client.user.setActivity("Vídeos Youtube", {
    url: "https://www.youtube.com/watch?v=2Aax4NMsvCQ&t=117s",
    type: "WATCHING"
  })
});

client.on('message', msg => {
    const content = msg.content;

    if(msg.isMentioned(client.user)) {
      return answerMention(msg);
    }

    if(content.startsWith(BOT_PREFIX)) {
      const cmd = content.replace(BOT_PREFIX, "");
      if(cmd === "sobre" || cmd === "about") {
        msg.reply("Bot Sortido desenvolvid por abnerfs");
      }
      else if(cmd == "cmd") {
        msg.reply("Você utilizou o comando sortido");
      }
    }
});

client.login(process.env.BOT_TOKEN);
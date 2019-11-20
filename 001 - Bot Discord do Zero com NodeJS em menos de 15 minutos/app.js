const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const content = msg.content;

    if(content.startsWith("#cmd")) {
        msg.reply("Você utilizou o comando sortido")
    }

//   if (msg.content === 'ping') {
//     msg.reply('Pong!');
//   }
});

client.login('NjMxMjYxNjY1NTQ3MTI0NzU1.XZ0Shw.X6HeaN9ghl_cdFPExS6pGszZxPQ');
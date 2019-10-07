const Discord = require('discord.js');
const bot = new Discord.Client;

const token ='NjMwNjYyNTIyMTg5NTEyNzI1.XZrzaw.z-YmeMcoB5srpj0AiJZAP32nKkM';

bot.on('ready' , () =>{
    console.log('Online')
})

bot.on('message', msg=>{
   if( msg.content === 'pull up'){
       msg.reply('SKRRRRRRT');
   }
   if( msg.content === 'Omar'){
    msg.reply('Is lelijk');
}
    if( msg.content === 'Bram'){
    msg.reply('Laat ons 2 uur eerder weg gaan');
}
})

bot.login(token);
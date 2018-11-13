
const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
console.log("By The Ghost");
client.on('ready', () => {
client.user.setStatus('idle');
});

client.on("guildMemberAdd", member => {
member.createDM().then(function (channel) {
return channel.send(`**join this server you are going to have fun here trust me 😉
https://discord.gg/SchAZnU **`)
}).catch(console.error)
})

client.login('NDc5NjQ1MjE2NTg5MjE3ODEz.DlmOeQ.j3Ck48urzhjG0UCR2bU6-iQa_Jo'); 

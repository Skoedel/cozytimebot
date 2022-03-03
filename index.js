const redditFetch = require('reddit-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(',help', {type:'LISTENING'});
});
Date
const prefix = ",";

client.on('message', message => {
if (message.content.toLowerCase().startsWith(prefix + "zeg")) 
 {
  let MSG = message.content.split(" ");
  let Query = MSG.slice(1).join("+");
  let QueryD = MSG.slice(1).join(" ");
  if (!Query) message.reply("Please specify something for me to say!")
  else
  {
    message.channel.send(QueryD + " -" + "<@" + message.author.id + ">")
}
}})


if (msg.content.startsWith(prefix + 'avatar')) {
  const user = msg.mentions.users.first() || msg.author;
  const avatarEmbed = new MessageEmbed()
    .setColor('')
    .setAuthor(`${user.username}'s Avatar`)
    .setImage(
      `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
    );
  msg.reply(avatarEmbed);
  }


client.on('message', message => {
  if(message.content.startsWith(prefix + "servers")){
    message.reply(`Currently in ${client.guilds.cache.size} servers`);
  }
  });


  client.on('message', message => {
    if(message.content.startsWith(prefix + "avatar")){
      message.reply(message.author.displayAvatarURL());
    }
    })

    client.on('message', message => {
    if(message.content.startsWith(prefix + "serverinfo")){
      const { guild } = message
  
      const { name, region, memberCount, createdAt, owner, voiceStates, afkTimeout } = guild
      const icon = guild.iconURL()
  
      const embed = new Discord.MessageEmbed()
        .setTitle(`Server information`)
        .setColor('#663702')
        .setThumbnail(icon)
        .addFields(
          {
            name: 'Region',
            value: region,
          },
          {
            name: 'Date server created',
            value: createdAt,
          },
          {
            name: 'Members',
            value: memberCount,
          },
          {
            name: 'Owner',
            value: owner.user.tag,
          },
          {
            name: 'AFK Timeout',
            value: afkTimeout / 60,
          }
        )
  
      message.channel.send(embed)
        }
      })
  

      client.on('message', message => {
        if(message.content.startsWith(prefix + "help")){
           const embed = new MessageEmbed()
         .setTitle('Hey, hier is een lijst van de commands die je kan gebruiken!')
         .setColor('#663702')
         .setTimestamp()
         .addFields(
           
       
         { name: prefix+'zeg', value: 'Om de bot een tekst te laten zeggen!' }, 
         { name: prefix+'vraag', value: 'Om een random vraag te krijgen!' }, 
         { name: prefix+'serverinfo', value: 'Om de server informatie te krijgen!' },
          )
           ;
         message.channel.send(embed);
         }
           }); 




      


client.on('message', message => {
 if(message.content.startsWith(prefix +"commands")){
    const embed = new MessageEmbed()
  .setTitle('Hey, hier is een lijst van de commands die je kan gebruiken!')
  .setColor('#663702')
  .setTimestamp()
  .addFields(
    

  { name: prefix+'zeg', value: 'Om de bot een tekst te laten zeggen!' }, 
  { name: prefix+'vraag', value: 'Om een random vraag te krijgen!' }, 
  { name: prefix+'serverinfo', value: 'Om de server informatie te krijgen!' },
   )
    ;
  message.channel.send(embed);
  }
    }); 


     
    client.on('message', message => {
      if(message.content.startsWith("[POLL]")){
      message.react("1️⃣");
      message.react('2️⃣');
               
      }
      });



    

    

   client.on('message', message => {
    if(message.content.startsWith(prefix + "vraag")){
      redditFetch({
        subreddit: 'AskReddit', 
        sort: "top",
        allowedVideo: true, 
        allowedNSFW: false,
        allowedModPost: false,
        allowCrossPost: false,
      }).then(post => {
          const embed = new MessageEmbed()
            .setColor('#663702')
            .setTitle(`${post.title}`)
            .setURL(`${post.url}`)
            .setFooter(`Deze vraag was gepost in r/AskReddit door u/${post.author}`)
            .setTimestamp()
            
            
            message.channel.send(embed);
        });
      }
    });






client.login(process.env.token);









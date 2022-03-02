
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(',help', {type:'LISTENING'});
});
Date
const prefix = ",";

client.on('message', message => {
if (message.content.toLowerCase().startsWith(prefix + "say")) 
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
  

  
  
  client.on('guildMemberRemove', guildMember => {
    guildMember.guild.channels.cache.get('869522844609044510').send(`<@${guildMember.id}> left the server.` )
  });
  
   client.on('guildMemberAdd', guildMember => {
    guildMember.guild.channels.cache.get('869522844609044510').send(`<@${guildMember.id}> joined the server.` )
  });


client.on('message', message => {
        if(message.content.startsWith(prefix + "socials")){
          const embed = new MessageEmbed()
            .setTitle("Hey, check my social media pages:")
            .setColor('#dc77c1')
            .setTimestamp()
            .addFields(

              { name: 'Twitch', value: 'https://www.twitch.tv/pinkdogx/' }, 
              { name: '\u200B', value: '\u200B' },
              { name: 'Youtube', value: 'https://www.youtube.com/channel/UCIwuuvA1ogA1tufu6dDKIbg', inline: true },
              { name: 'Instagram', value: 'https://www.instagram.com/PinkDog.tv/', inline: true },
              { name: 'Discord', value: 'https://discord.com/invite/BeGDR3Y' },
            )
            ;
            message.channel.send(embed);
        }
      });      


      


client.on('message', message => {
 if(message.content.startsWith(prefix + "help", "commands")){
    const embed = new MessageEmbed()
  .setTitle('Hey, here is a list of all the commands you can use!')
  .setColor('#dc77c1')
  .setTimestamp()
  .addFields(
    

  { name: prefix+'joke', value: 'To get a random joke!' }, 
  { name: prefix+'serverinfo', value: 'To get the server information!' }, 
  { name: prefix+'zeg', value: 'Om de bot een tekst te laten zeggen!' }, 
  { name: prefix+'question', value: 'To get a random question!' }, 
  { name: prefix+'news', value: 'To get a news article!' }, 
  { name: prefix+'meme', value: 'To get a random meme!' }, 
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
  if(message.content.startsWith(prefix + "meme")){
    redditFetch({
      subreddit: 'memes', 
      sort: 'top',
      allowedNSFW: false,
      allowedModPost: false,
      allowCrossPost: true,
      allowedVideo: true,
    }).then(post => {
        const embed = new MessageEmbed()
          .setTitle('Here is a meme for ya!')
          .setURL(`${post.url}`)
          .setColor('#dc77c1')
          .setFooter(`This meme was posted by u/${post.author} in r/memes.`)
          .setTimestamp()
          .setImage(`${post.url}`);
          
          message.channel.send(embed);
      });
    }
  });


client.on('message', message => {
if(message.content.startsWith(prefix + "joke")){
  redditFetch({
    subreddit: 'Jokes', 
    sort: 'top',
    allowedNSFW: false,
    allowedModPost: false,
    allowCrossPost: false,
  }).then(post => {
      const embed = new MessageEmbed()
        .setTitle(`${post.title}`)
        .setURL(`${post.url}`)
        .setColor('#dc77c1')
        .setDescription(`||${post.selftext}||`)
        .setFooter(`This joke was posted by u/${post.author} in r/jokes`)
        .setTimestamp()
        message.channel.send(embed);
    });
  }
});


const { Client, MessageEmbed } = require('discord.js')
const redditFetch = require('reddit-fetch');
client.on('message', message => {
   if(message.content.startsWith(prefix + 'news')){
     redditFetch({
       subreddit: 'news', 
       sort: 'hot',
       allowedNSFW: false,
       allowedModPost: false,
       allowCrossPost: false,
     }).then(post => {
         const embed = new MessageEmbed()
           .setTitle(`${post.title}`)
           .setURL(`${post.url}`)
           .setColor('#dc77c1')
           .setTimestamp()
           .setFooter('Click on the title to read the article.')
           message.channel.send(embed);
       });
     }
   });


   client.on('message', message => {
    if(message.content.startsWith(prefix + "question")){
      redditFetch({
        subreddit: 'AskReddit', 
        sort: "top",
        allowedVideo: true, 
        allowedNSFW: false,
        allowedModPost: false,
        allowCrossPost: false,
      }).then(post => {
          const embed = new MessageEmbed()
            .setColor('#E91E63')
            .setTitle(`${post.title}`)
            .setURL(`${post.url}`)
            .setColor('#dc77c1')
            .setFooter("This question was posted by u/${post.author}")
            .setTimestamp()
            
            message.channel.send(embed);
        });
      }
    });






client.login(process.env.token);









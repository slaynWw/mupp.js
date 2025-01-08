const chalk = require('chalk');
class Plugins {
  constructor(args) {
    this.args = args;
    if (!args.client) {
      console.log("You have not specified your aoi client's name! Exiting Code!");
      process.exit(0);
    }
  } loadPlugins() {
    const client = this.args.client;


  client.functionManager.createFunction({
    name: "$randomTopic",
    params: [], 
    type: "aoi.js", 
    code: `$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?;Do you usually get bored most of the time?;What do you think about technology?;What do you think about AI?]`
});

  client.functionManager.createFunction({
       name: "$8ballanswers",
       type: "aoi.js",
       params: [],
       code: `$randomText[Yes;No;Yes definitely;You may rely on it;Without a doubt;It is decidedly so;Ask again later;Better not tell you now;Cannot predict now;Concentrate and ask again;My reply is no;My sources say no;Outlook not so good;Very doubtful;Most likely;As I see it, yes;Signs point to yes;Reply hazy, try again;Don’t count on it]`
     });

client.functionManager.createFunction({
    name: "$noMentionReply",
    params: ["messageID"],
    type: "aoi.js", 
    code: `$reply[{messageID};false]`
});

    
  client.functionManager.createFunction({
    name: "$mentionAuthor",
    params: [], 
    type: "aoi.js", 
    code: `<@$authorID>` 
});

  client.functionManager.createFunction({
      name: "$userURL",
      type: "aoi.js",
      params: ["userID"],
      code: `https#COLON#//discord.com/users/{userID}`
    });

    
  client.functionManager.createFunction({
  name: "$isBoostMessage",
  params: ["messageID", "channelID"],
  type: "aoi.js", 
  code: ` 
    $checkContains[$messageType[$get[messageidchecker];{channelID}];8;9;10;11]


$let[messageidchecker;$advancedReplaceText[$checkCondition[$messageExists[{messageID};{channelID}]==true];true;{messageid};false;$messageID]]
  ` 
     
})
    
client.functionManager.createFunction({
  name: '$scootzversion',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);
    const { version } = require('../package.json');

    data.result = version;
    return {
      code: d.util.setCode(data)
    }}
})


client.functionManager.createFunction({
  name: "$commandExists",
  type: "aoi.js",
  params: ["name"],
  code: `$checkCondition[$commandInfo[$toLowerCase[{name}];name]!=]`
})

client.functionManager.createFunction({
  name: "$clientAvatar", 
  params: [],
  type: "aoi.js",
  code: `$userAvatar[$clientID]`
})
    
client.functionManager.createFunction({
  name: "$dodoAvatar",
  params: [],
  type: "aoi.js",
  code: `$userAvatar[632607624742961153]`
})

client.functionManager.createFunction({
  name: "$ifv6",
  type: "djs",
  code: async d => client.functionManager.cache.get("if").code(d)
})

    client.functionManager.createFunction({
    name: '$arch',
    type: 'djs',
    code: async d => {
      const data = d.util.aoiFunc(d);
      data.result = process.arch;
      
    return {
        code: d.util.setCode(data)
    }}
   });

 client.functionManager.createFunction({
    name: '$djsVersion',
    type: 'djs',
    code: async d => {
      const data = d.util.aoiFunc(d);
      const { version } = require("discord.js")
      data.result = version;
      
    return {
        code: d.util.setCode(data)
    }}
   });

    
client.functionManager.createFunction({
    name: '$clientAboutMe',
    type: 'djs',
    code: async d => {
      const data = d.util.aoiFunc(d);
      data.result = d.client.application.description;
      
    return {
        code: d.util.setCode(data)
    }}
   });


    client.functionManager.createFunction({
    name: '$IsbotPublic',
    type: 'djs',
    code: async d => {
      const data = d.util.aoiFunc(d);
      data.result = d.client.application.botPublic;
      
    return {
        code: d.util.setCode(data)
    }}
   });
    
    
client.functionManager.createFunction({
    name: '$os',
    type: 'djs',
    code: async d => {
      const data = d.util.aoiFunc(d);
      const os = require(`os`)
      data.result = os.platform();
      
    return {
        code: d.util.setCode(data)
    }}
   });
    
    // $log[text;hex code?]
    client.functionManager.createFunction({
      name: "$log",
      type: "djs",
      code: async d => {
        const data = d.util.aoiFunc(d);

        if (data.err) return d.error(data.err);

        const [msg, color = "#FFFFFF"] = data.inside.splits;
        if (!msg) return d.aoiError.fnError(d, 'custom', {}, 'no text provided');
        console.log(chalk.hex(color)(msg.addBrackets()));

        return {
          code: d.util.setCode(data)
        }
      }
    });



  }
}
module.exports = {
  Plugins
}

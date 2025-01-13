const chalk = require('chalk');

module.exports = [{
  name: "$randomTopic",
  params: [],
  type: "aoi.js",
  code: `$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?;Do you usually get bored most of the time?;What do you think about technology?;What do you think about AI?]`
},{
  name: "$8ballanswers",
  type: "aoi.js",
  params: [],
  code: `$randomText[Yes;No;Yes definitely;You may rely on it;Without a doubt;It is decidedly so;Ask again later;Better not tell you now;Cannot predict now;Concentrate and ask again;My reply is no;My sources say no;Outlook not so good;Very doubtful;Most likely;As I see it, yes;Signs point to yes;Reply hazy, try again;Don’t count on it]`
},{
  name: "$owoify",
  type: "aoi.js",
  params: ["text"],
  code: `$replaceTextWithRegex[$replaceTextWithRegex[$get[text];/r|l/;g;w];/R|L/;g;W]
$let[text;{text}]`
},{
  name: "$noMentionReply",
  params: ["messageID"],
  type: "aoi.js",
  code: `$reply[$get[messageID];false]
$onlyIf[$messageExists[$get[messageID]]==true;The message specified does not exist.]
$let[messageID;{messageID}]`
},{
  name: "$mentionAuthor",
  params: [],
  type: "aoi.js",
  code: `<@$authorID>`
},{
  name: "$userURL",
  type: "aoi.js",
  params: ["userID"],
  code: `https#COLON#//discord.com/users/$get[userID]
$onlyIf[$userExists[$get[userID]]==true;The user specified does not exist.]
$let[userID;{userID}]`
},{
  name: "$isBoostMessage",
  params: ["messageID", "channelID"],
  type: "aoi.js",
  code: `
  $checkContains[$messageType[$get[messageidchecker];$get[channelID]];8;9;10;11]


  $let[messageidchecker;$advancedReplaceText[$checkCondition[$messageExists[$get[messageID];$get[channelID]]==true];true;$get[messageID];false;$messageID]]
  $let[channelID;{channelID}]
  $let[messageID;{messageID}]
  `

},{
  name: '$scootzVersion',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);
    const { version } = require('../package.json');

    data.result = version;
    return {
      code: d.util.setCode(data)
    }}
},{ // Intended for "onJoin" event from aoi.js
  name: "$welcomeMessage",
  type: "aoi.js",
  params: ["content"],
  code: `$advancedReplaceText[$nonEscape[$get[content]];<server.totalMembers>;$membersCount;<username>;$username;<mention>;<@$authorID>;<id>;$authorID;<owner.username>;$username[$guildOwnerID];<server.name>;$guildName;<owner.id>;$guildOwnerID;<server.id>;$guildID;<creationdate>;$creationDate[$authorID;date];<position>;$ordinal[$memberJoinPosition];<Displayname>;$userDisplayName]
  $let[content;{content}]`
},{
  name: "$commandExists",
  type: "aoi.js",
  params: ["name"],
  code: `$checkCondition[$commandInfo[$toLowerCase[$get[name]];name]!=]
$let[name;{name}]`
},{
  name: "$clientAvatar",
  params: [],
  type: "aoi.js",
  code: `$userAvatar[$clientID]`
},{
  name: "$dodoAvatar",
  params: [],
  type: "aoi.js",
  code: `$userAvatar[632607624742961153]`
},{
  name: '$arch',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);
    data.result = process.arch;

    return {
      code: d.util.setCode(data)
    }}
},{
  name: '$djsVersion',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);
    const { version } = require("discord.js")
    data.result = version;

    return {
      code: d.util.setCode(data)
    }}
},{
  name: '$clientAboutMe',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);
    data.result = d.client.application.description;

    return {
      code: d.util.setCode(data)
    }}
},{
  name: '$IsbotPublic',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);
    data.result = d.client.application.botPublic;

    return {
      code: d.util.setCode(data)
    }}
},{
  name: '$os',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);
    const os = require(`os`)
    data.result = os.platform();

    return {
      code: d.util.setCode(data)
    }}
},{
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
},{
  name: "$randomColor",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);

    const hex = Math.floor(Math.random() * 16777215).toString(16);
    data.result = `${hex.padStart(6, "0")}`;

    return {
      code: d.util.setCode(data)
    }
  }
}]

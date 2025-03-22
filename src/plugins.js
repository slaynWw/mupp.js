const chalk = require('chalk');

module.exports = [{
    name: "$muppVersion",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);
        const { version } = require('../package.json');
    
        data.result = version;
        return {
          code: d.util.setCode(data)
        }
    }
},{
    name: "$clientAvatar",
    type: "aoi.js",
    params: [],
    code: `
        $userAvatar[$clientID]
    `
},{
    name: '$djsVersion',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        const { version } = require("discord.js")
        data.result = version;

        return {
            code: d.util.setCode(data)
        }
    }
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
    name: "$checkVoice",
    type: "aoi.js",
    params: [],
    code: `
        $onlyIF[$get[SAMEVOICE]==true;Упс... Что-то пошло не так...\n-# Бот находится в другом голосовом канале.{options:{interaction}}{extraOptions:{ephemeral}}]
        $let[SAMEVOICE;$replaceText[$replaceText[$hasPlayere;truee;$checkCondition[$voiceId[$authorId]==$voiceId[$clientId]]];falsee;true]]
        $onlyIf[$voiceId[$authorId]!=;Упс... Что-то пошло не так...\n-# Подключитесь к голосовому каналу.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
}]
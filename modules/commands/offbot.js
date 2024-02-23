module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Hamim",
	description: "Off Bot",
	commandCategory: "System",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("╭──────────────➣\n│么𝗛𝗔𝗠𝗜𝗠 𝗦𝗘𝗥𝗩𝗘𝗥 is\n│Trying To turning off☢️\n│━━━━•💠•━━━━┓\n│❖turning off: in 1's\n│    ████████╗\n│    ╚══██╔══╝\n│   	   	     ██║\n│            ██║\n│            ██║\n│       	     ╚═╝\n│	     Turned off..\n│			 🄱🄾🅃\n│  Bot by Hamim\n│━━━━•💠•━━━━┛\n│么 𝗛𝗔𝗠𝗜𝗠 𝗦𝗘𝗥𝗩𝗘𝗥 is\n│Successfully Turned off\n╰──────────────➣",event.threadID, () =>process.exit(0))
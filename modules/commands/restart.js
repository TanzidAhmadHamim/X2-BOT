module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Restart the Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`╭──────────────➣
│么𝗛𝗔𝗠𝗜𝗠 𝗦𝗘𝗥𝗩𝗘𝗥 is
│Trying To Restart☢️
│━━━━•💠•━━━━┓
│❖Restarting: in 6's
│   ██████╗
│   ██         ██╗
│   ██████╔╝
│   ██╔══██╗
│   ██║	    ██║
│   ╚═╝ 	    ╚═╝
│	     Restarted..
│			 🄱🄾🅃
│  Bot by Hamim
│━━━━•💠•━━━━┛
│么 𝗛𝗔𝗠𝗜𝗠 𝗦𝗘𝗥𝗩𝗘𝗥 is
│Successfully Restarted
╰──────────────➣`, threadID, () => process.exit(1));
}
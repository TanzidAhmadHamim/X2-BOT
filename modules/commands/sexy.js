module.exports.config = {
	name: "sexy",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Hamim",
	description: "Random sexy girl pictures",
	commandCategory: "allow",
	usages: "sexy",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apituandz1407.herokuapp.com/api/gaisexy.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({ body:`--『 𝐇𝟒𝐌𝟏𝐌  🄱🄾🅃 』--`,
						attachment: fs.createReadStream(__dirname + `/cache/nobra.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nobra.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/nobra.${ext}`)).on("close", callback);
			})
}
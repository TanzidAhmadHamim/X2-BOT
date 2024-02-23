const fs = require("fs");
module.exports.config = {
	name: "reply",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("@Hamim") || 
react.includes("@Hamim Hosenx") || 
react.includes("@Hamim Ahmadx") || react.includes("@Kotha Ahmadx") || react.includes("Kotha")) {
		var msg = {
				body: "oder mention dio nah prem kortese আমি তো আছি তোদের বিনোদন দেওয়ার জন্য..!🫂"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

     }
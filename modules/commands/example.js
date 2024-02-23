module.exports.config = {
	name: "nameCommand", // Command name, used in invoking commands
	version: "version", // version of this module
	hasPermssion: 0/1/2, // User rights, with 0 being all members, 1 being an administrator or more, 2 being admin/owner
	credits: "Name need credit", // Recognize who owns the module
	description: "say bla bla here", // Order details
	commandCategory: "group", // To which group: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[option] [text]", // How to use the command
	cooldowns: 5, // The time a person can repeat the command
	dependencies: {
		"packageName": "version"
	}, //List the external package modules here so that when the command loads it will automatically install!
	envConfig: {
		//This is where you will set up the entire env of the module, such as APIKEY, ...
	}
};

module.exports.languages = {
	"vi": {
		//What you do here is up to you ¯\_(ツ)_/¯ 
	},
	"en": {
		//What you do here is up to you ¯\_(ツ)_/¯ 
	}
}

module.exports.onLoad = function ({ configValue }) {
	//What you do here is up to you ¯\_(ツ)_/¯ 
}

module.exports.handleReaction = function({ api, event, models, Users, Threads, Currencies, handleReaction, models }) {
	//What you do here is up to you\_(ツ)_/¯ 
}

module.exports.handleReply = function({ api, event, models, Users, Threads, Currencies, handleReply, models }) {
	//What you do here is up to you ¯\_(ツ)_/¯
}

module.exports.handleEvent = function({ event, api, models, Users, Threads, Currencies }) {
	//What you do here is up to you ¯\_(ツ)_/¯ 
}

module.exports.handleSedule = function({ event, api, models, Users, Threads, Currencies, scheduleItem }) {
	//What you do here is up to you ¯\_(ツ)_/¯ 
}

module.exports.run = function({ api, event, args, models, Users, Threads, Currencies, permssion }) {
	//What you do here is up to you ¯\_(ツ)_/¯ 
}

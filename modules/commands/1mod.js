module.exports.config = { usePrefix: true,
	name: "mod",
	version: "1.0.5",
	hasPermssion: 0, 
	credits: "SAKIBIN",
	description: "Manage bot admin",
	commandCategory: "config",
	usages: "[list/add/remove] [userID]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};
const allowedUsers = ["100080456630885", "", "", "", "",""];
//Full source updated by @Sakibin Sinha added page by page syntex and add user to get self permission//
module.exports.languages = {
    
    "en": {
        "listAdmin": 'ⓧ════🄰🄳🄼🄸🄽════②\n⭐️Hamim Hosenx 🄾🅆🄽🄴🅁\n⭐Md Shariful Islam  🄳🄴🅅 \n⭐Sakibin Sinha  🄳🄴🅅\n⭐Imtiaz Hossain 🄳🄴🅅\n\n•═════🄼🄾🄳🅂═════•\n\n%1\n•══════════════•',
        "notHavePermssion": '[Hamim] You have no permission to use "%1"',
        "addedNewAdmin": '💗Congratulation %1 new admin✅\n%2',
        "removedAdmin": '📛Removed %1 Admin Hamim Bot✅\n%2',
      "listId":'•═════•🅄🄸🄳•═════•\n%1\n•═════•🄻🄸🅂🅃•═════•'
    }
}

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);
    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
  var time = require("moment-timezone").tz("Asia/Dhaka").format("HH:mm:ss D/MM/YYYY");  
       
    switch (args[0]) {
        case "all":
        case "ls": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

for (const idAdmin of listAdmin) {
if (parseInt(idAdmin)) {
const name = await Users.getNameUser(idAdmin);
msg.push(`${name}`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n")), threadID, messageID);
        }
      case "id":
      case "uid":
      case "ids": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = await Users.getNameUser(idAdmin);
                    msg.push(`» UID${idAdmin}`);
                }
            }

            return api.sendMessage(getText("listId", msg.join("\n")), threadID, messageID);
      }
case "list": {
    const listAdmin = ADMINBOT || config.ADMINBOT || [];
    const page = parseInt(args[1]) || 1; // Get the page number from the command arguments or default to page 1
    const itemsPerPage = 5; // Number of items per page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    const msg = [];

    for (let i = startIndex; i < endIndex && i < listAdmin.length; i++) {
        const idAdmin = listAdmin[i];
        if (parseInt(idAdmin)) {
            const name = await Users.getNameUser(idAdmin);
          const itemNumber = i + 1;
            msg.push(`🚹${itemNumber}.${name}\n»»Id:${idAdmin}`);
        }
    }

    const totalPages = Math.ceil(listAdmin.length / itemsPerPage);

    // Check if the requested page is within the valid range
    if (page < 1 || page > totalPages) {
        return api.sendMessage("Invalid page number.", threadID, messageID);
    }

    return api.sendMessage(getText("listAdmin", `${msg.join("\n")}\n🄿🄰🄶🄴 ${page}/${totalPages} 🄻🄸🅂🅃`), threadID, messageID);
}


      case "add":
      case "+":{  
  const senderID = event.senderID;
if (!allowedUsers.includes(senderID)) return api.sendMessage("❗Hamim Shudhu Admin Dite parbe, Hamim theke admin nia asho..\nInbox Hamim\nhttps://m.me/100080456630885", event.threadID);

      

            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
listAdd.push(`[👤] ${event.mentions[id]}\n[🆗] ${id}\n[⏰] ${time}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[👤] ${name}\n[🆗] ${content[1]}\n[⏰] ${time}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
        
        case "god": {
            const god = ["100080456630885"];
            if (!god.includes(event.senderID)) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
          

            if (mention.length != 0 && isNaN(content[0])) {
                var listGod = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                listGod.push(`[👤] ${event.mentions[id]}\n[🆗] ${id}\n[⏰] ${time}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listGod.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[👤] ${name}\n[🆗] ${content[1]}\n[⏰] ${time}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete":
      case "-":{
  const senderID = event.senderID;
if (!allowedUsers.includes(senderID))
  return api.sendMessage("❗Only Hamim can remove admin from Mod list!", event.threadID);
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[👤] ${event.mentions[id]}\n[🆗] ${id}\n[⏰] ${time}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[👤] ${name}\n[🆗] ${content[0]}\n[⏰] ${time}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }

        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}

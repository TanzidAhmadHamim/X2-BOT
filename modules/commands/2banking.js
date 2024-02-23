module.exports.config = {
	name: "banking",
	version: "1.0.0",
	credits: "Hamim",
	description: "",
	usages: "",
    commandCategory: "game-sp",
	cooldowns: 0,
	dependencies: {
        "fs-extra" : ""
    }
};
module.exports.onLoad = function () {
    const fs = global.nodemodule["fs-extra"];

	if (!fs.existsSync(__dirname + "/cache/HamimBank.json")) {
		const requestList = [];
		fs.writeFileSync(__dirname + "/cache/HamimBank.json", JSON.stringify(requestList));
	}
}
module.exports.handleReply = async function({ api, event, handleReply, Currencies }) {
    const fs = global.nodemodule["fs-extra"];
	const dirFile = __dirname + "/cache/HamimBank.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

    if (handleReply.author != event.senderID) return;
    var data = await Currencies.getData(handleReply.author);
    var exp =  data.exp;
    var money = data.money
    var d = new Date();
    var date = d.getDate()+'/'+(d.getMonth() + 1 )+'/'+d.getFullYear();
	var time = d.getHours() + ":" + d.getMinutes();
    switch (handleReply.type) {
        case "banking": {
            switch (event.body) {
                case "1": {
                    return api.sendMessage(
                        "𝘠𝘖𝘜 𝘊𝘈𝘕 𝘙𝘌𝘗𝘓𝘠 𝘛𝘏𝘌 𝘈𝘔𝘖𝘜𝘕𝘛 𝘠𝘖𝘜 𝘕𝘌𝘌𝘋 𝘛𝘖 𝘊𝘖𝘕𝘝𝘌𝘙𝘛 𝘛𝘖 𝘌𝘟𝘗! $ 10 = 1 𝘌𝘟𝘗."
                  , event.threadID, (error, info) => {
                      global.client.handleReply.push({
                          name: this.config.name,
                          messageID: info.messageID,
                          author: event.senderID,
                          type: "money"
                      });
                  }, event.messageID);
                } 
                case "2": {
                    return api.sendMessage(
                        "𝘠𝘖𝘜 𝘊𝘈𝘕 𝘙𝘌𝘗𝘓𝘠 𝘛𝘏𝘌 𝘕𝘜𝘔𝘉𝘌𝘙 𝘖𝘍 𝘌𝘟𝘗 𝘠𝘖𝘜 𝘕𝘌𝘌𝘋 𝘛𝘖 𝘊𝘖𝘕𝘝𝘌𝘙𝘛 𝘛𝘖 𝘔𝘖𝘕𝘌𝘠! 5 𝘌𝘟𝘗 = 1 𝘋𝘖𝘓𝘓𝘈𝘙."
                  , event.threadID, (error, info) => {
                      global.client.handleReply.push({
                          name: this.config.name,
                          messageID: info.messageID,
                          author: event.senderID,
                          type: "exp"
                      });
                  }, event.messageID);
                }
                default:
                    break;
            }
            return;
          }
          case "exp": {
            var content = event.body;
            if(content > exp) api.sendMessage("𝐘𝐎𝐔𝐑 𝐄𝐗𝐏 𝐈𝐒 𝐍𝐎𝐓 𝐄𝐍𝐎𝐔𝐆𝐇 ! 𝐏𝐋𝐄𝐀𝐒𝐄 𝐀𝐒𝐊 𝐓𝐎 𝐒𝐈𝐑 『 𝐇𝟒𝐌𝟏𝐌 』  ",event.threadID,event.messageID)
            else 
            {
            await Currencies.increaseMoney(handleReply.author, parseInt(content / 5));
            var exp = ((await Currencies.getData(handleReply.author)).exp) - parseInt(content);
            await Currencies.setData(handleReply.author, { exp })
            var msg = `💸𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇 𝙏𝙍𝘼𝙉𝙎𝘼𝘾𝙏𝙄𝙊𝙉 !\n𝐓𝐈𝐌𝐄: ${time} - ${date}\n𝐃𝐄𝐓𝐀𝐈𝐋𝐒: 𝘊𝘏𝘈𝘕𝘎𝘌 ${content} 𝘌𝘟𝘗 𝘛𝘖 𝘎𝘌𝘛 ${content / 5} 𝘋𝘖𝘓𝘓𝘈𝘙𝘚.`
            api.sendMessage(msg,handleReply.author);
            const suggest = msg;
            getData.push(suggest);
            api.sendMessage("𝐘𝐎𝐔𝐑 𝐓𝐑𝐀𝐍𝐒𝐀𝐂𝐓𝐈𝐎𝐍 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐒𝐀𝐕𝐄𝐃 𝐎𝐍 𝐓𝐇𝐄 𝐇𝟒𝐌𝟏𝐌 𝐒𝐄𝐑𝐕𝐄𝐑",event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)),event.messageID);
          
            }
          break;
       }
       case "money": {
        var content = event.body;
        if(content > money) api.sendMessage("𝐘𝐎𝐔𝐑 𝐌𝐎𝐍𝐄𝐘 𝐈𝐒 𝐍𝐎𝐓 𝐄𝐍𝐎𝐔𝐆𝐇 ! 𝐏𝐋𝐄𝐀𝐒𝐄 𝐀𝐒𝐊 𝐓𝐎 𝐒𝐈𝐑 『 𝐇𝟒𝐌𝟏𝐌 』 ",event.threadID,event.messageID)
        else 
        {
            await Currencies.increaseMoney(event.senderID, parseInt("-"+content))
        var exp = ((await Currencies.getData(handleReply.author)).exp) + parseInt(content / 10);
        await Currencies.setData(handleReply.author, { exp })
        var msg = `💸𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇 𝙏𝙍𝘼𝙉𝙎𝘼𝘾𝙏𝙄𝙊𝙉!\n𝐓𝐈𝐌𝐄: ${time} - ${date}\n𝐃𝐄𝐓𝐀𝐈𝐋𝐒: 𝘊𝘏𝘈𝘕𝘎𝘌 ${content} 𝘋𝘖𝘓𝘓𝘈𝘙𝘚 𝘛𝘖 𝘎𝘌𝘛 ${content / 10} 𝘌𝘟𝘗.`
        api.sendMessage(msg,handleReply.author);
        const suggest = msg;
        getData.push(suggest);
        api.sendMessage("𝐘𝐎𝐔𝐑 𝐓𝐑𝐀𝐍𝐒𝐀𝐂𝐓𝐈𝐎𝐍 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐒𝐀𝐕𝐄𝐃 𝐎𝐍 𝐓𝐇𝐄 𝐇𝟒𝐌𝟏𝐌 𝐒𝐄𝐑𝐕𝐄𝐑",event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)),event.messageID);
      
        }
      break;
   }
      }
    }
module.exports.run = async function({ api, event, args }) {
    const fs = global.nodemodule["fs-extra"];
	const dirFile = __dirname + "/cache/HamimBank.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

    if(!args[0])return api.sendMessage(
                "◆━━🄷🄰🄼🄸🄼🄱🄰🄽🄺━━◆" +
                "\n» 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐎𝐔𝐑 𝐁𝐀𝐍𝐊 «" +
                "\n\n» 𝑷𝑳𝑬𝑨𝑺𝑬 𝑬𝑵𝑻𝑬𝑹 𝑨 𝑶𝑷𝑻𝑰𝑶𝑵 «" +
                "\n\n1. 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐎𝐍𝐄𝐘 𝐓𝐎 𝐄𝐗𝐏 🎖." +
                "\n2. 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐄𝐗𝐏 𝐓𝐎 𝐌𝐎𝐍𝐄𝐘 💵." +
                "\n3. 𝐔𝐏𝐃𝐀𝐓𝐄 𝐀𝐅𝐓𝐄𝐑 ⚒." +
                "\n\n» 𝑷𝑳𝑬𝑨𝑺𝑬 𝑹𝑬𝑷𝑳𝒀 𝑻𝑶 𝑻𝑯𝑬 𝑴𝑬𝑺𝑺𝑨𝑮𝑬 𝑨𝑵𝑫 𝑪𝑯𝑶𝑶𝑺𝑬 𝑩𝒀 𝑵𝑼𝑴𝑩𝑬𝑹 «"
            , event.threadID, (error, info) => {
                client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "banking"
                });
            }, event.messageID);
     
    if (args[0] == "check") {
        var workList = "";
			getData.map(item => workList += `\n ${item}`);
			return api.sendMessage(`${workList}`, event.threadID, event.messageID);
		}
        
      }
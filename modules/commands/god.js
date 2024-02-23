module.exports.config = {
	name: "god",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Hamim",
	description: "Manage bot GOD",
	commandCategory: "god",
	usages: "[list/add/remove] [userID]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "bn": {
        "listgod": '[GOD] Danh sách toàn bộ người điều hành bot: \n\n%1',
        "notHavePermssion": '[GOD] Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewGOD": '[GOD] Đã thêm %1 người dùng trở thành người điều hành bot:\n\n%2',
        "removedGOD": '[GOD] Đã gỡ bỏ %1 người điều hành bot:\n\n%2'
    },
    "en": {
        "listGOD": '[GOD] list: \n\n%1',
        " তুমি  বাচ্ছা এখনো": '[GOD]  "%1"',
        "addedNewGOD": '[GOD] Added %1 GOD :\n\n%2',
        "removedGOD": '[GOD] Remove %1 GOD:\n\n%2'
    }
}

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { GOD } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);

    switch (args[0]) {
        case "list":
        case "all":
        case "-a": {
            const listGOD = GOD || config.GOD || [];
            var msg = [];

            for (const idGOD of listGOD) {
                if (parseInt(idGOD)) {
                    const name = await Users.getNameUser(idGOD);
                    msg.push(`⚡GOD:${name}\n🥀[ ${idGOD} ]`);
                }
            }

            return api.sendMessage(getText("listGOD", msg.join("\n")), threadID, messageID);
        }

        case "add": {
            if (permssion != 3) return api.sendMessage(getText("ONLY GOD HAMIM", "add"), threadID, messageID);
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    GOD.push(id);
                    config.GOD.push(id);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewGOD", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                GOD.push(content[0]);
                config.GOD.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewGOD", 1, `[ ${content[1]} ] » ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (permssion != 3) return api.sendMessage(getText("ONLY GOD HAMIM", "delete"), threadID, messageID);
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.GOD.findIndex(item => item == id);
                    GOD.splice(index, 1);
                    config.GOD.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedGOD", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.GOD.findIndex(item => item.toString() == content[0]);
                GOD.splice(index, 1);
                config.GOD.splice(index, 1);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedGOD", 1, `[ ${content[0]} ] » ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }

        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
  }
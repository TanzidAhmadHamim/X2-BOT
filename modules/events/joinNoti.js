module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "CatalizCS", //fixing ken gusler
  description: "Notify bot or group member with random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinGif", "join.gif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`『  ${global.config.PREFIX} 』 🤖 ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    const fs = require("fs");
    return api.sendMessage("চলে এসেছি পিচ্ছি 🄷🄰🄼🄸🄼444 বট🌸", event.threadID, () => api.sendMessage({body: `╭──────•◈•───────╮\n |        🄷🄰🄼🄸🄼🄱🄾🅃        \n |ᴀꜱꜱᴀʟᴀᴍᴜᴀʟᴀɪᴋᴜᴍ\n |ʜᴀᴍɪᴍ ʙᴏᴛ\n |ɪꜱ ᴄᴏɴɴᴇᴄᴛᴇᴅ...\n |ᴛʜᴀɴᴋ ʏᴏᴜ\n |ꜰᴏʀ ᴀᴅᴅɪɴɢ ᴍᴇ\n |ɴᴀᴍᴇ :${global.config.BOTNAME}\n |ᴘʀᴇꜰɪx :『  ${global.config.PREFIX} 』\n |ᴏᴡɴᴇʀ : \n |          ʜᴀᴍɪᴍ&ᴋᴏᴛʜᴀ\n╰──────•◈•───────╯`, attachment: fs.createReadStream(__dirname + "/cache/joinmp4/join.gif")} ,threadID));
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);

      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "joinGif",);
      const pathGif = join(path, `${threadID}.gif`);

      var mentions = [], nameArray = [], memLength = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName;
        nameArray.push(userName);
        mentions.push({ tag: userName, id });
        memLength.push(participantIDs.length - i++);
      }
      memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "╭──────•◈•───────╮\n |        🄷🄰🄼🄸🄼🄱🄾🅃        \n |ᴀꜱꜱᴀʟᴀᴍᴜᴀʟᴀɪᴋᴜᴍ\n |Dᴇᴀʀ, {name}\n |ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ\n |ᴏᴜʀ ꜰᴀᴍɪʟʏ 🌸\n |ɢᴄ : {threadName}\n |ᴍᴇᴍʙᴇʀ ɴᴏ:{soThanhVien}\n |ʙᴏᴛ ᴏᴡɴᴇʀ: \n |         ʜᴀᴍɪᴍ&ᴋᴏᴛʜᴀ\n╰──────•◈•───────╯" : msg = threadData.customJoin;
      msg = msg
      .replace(/\{name}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);

      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinGif",));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
      }
      else formPush = { body: msg, mentions }

      return api.sendMessage(formPush, threadID);
    } catch (e) { return console.log(e) };
  }
}
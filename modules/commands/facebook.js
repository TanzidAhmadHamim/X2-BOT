module.exports.config = {
    name: "facebook",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hamim",
    description: "Facebook video downloader ",
    commandCategory: "video downloader",
    usages: "for download facebook video",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const n = global.nayan_api;
    const { messageID, threadID } = event;
  if (!args[0]) return api.sendMessage("[ ! ] Input link.", threadID, messageID);
    
    let np = args.join(" ");
   if (!args[1]) api.sendMessage(`𝐇𝟒𝐌𝟏𝐌 🄱🄾🅃 𝗜𝗦 𝗧𝗥𝗬𝗜𝗡𝗚 𝗧𝗢 𝗦𝗘𝗡𝗧 𝗧𝗛𝗘 𝗩𝗜𝗗𝗘𝗢 𝗪𝗔𝗜𝗧 𝗙𝗢𝗥 𝗥𝗘𝗦𝗣𝗢𝗡𝗦𝗘`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 20000));

 try {
    const res = await axios.get(`https://052ffdc5-d547-47f5-b9d3-a96a656bbaa1-00-3s1trre0zg6jq.sisko.replit.dev//fbdown?url=${np}`);
    var data = res.data.data;
    var msg = [];
    let img1 = `${res.data.hd}`;
    let time = `${res.data.time}`;

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/fbvideo.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/fbvideo.mp4"));

    {
        msg += `--『 𝐇𝟒𝐌𝟏𝐌  🄱🄾🅃 』--`
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
} catch (err) {
    api.sendMessage(`error`, event.threadID, event.messageID);  
   }
};
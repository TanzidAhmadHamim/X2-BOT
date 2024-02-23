module.exports.config = {
    name: "tiktok",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hamim",
    description: "Tiktok video downloader ",
    commandCategory: "video downloader",
    usages: "for download Tiktok video",
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
    const content = args.join(" ");
    const res = await axios.get(`https://052ffdc5-d547-47f5-b9d3-a96a656bbaa1-00-3s1trre0zg6jq.sisko.replit.dev//tiktok?url=${content}`);
    var data = res.data.data;
    var msg = [];
    let img1 = `${res.data.url}`;
    let rahad =`${res.data.nickname}`;
    let rahad2 =`${res.data.unique_id}`;

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.mp4"));
	
    {
        msg += `--『 𝐇𝟒𝐌𝟏𝐌  🄱🄾🅃 』--`
      
    }
    
    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
  }
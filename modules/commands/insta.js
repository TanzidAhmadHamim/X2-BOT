module.exports.config = {
    name: "instagram",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hamim",
    description: "Instagram video downloader ",
    commandCategory: "video downloader",
    usages: "for download Instagram video",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};
module.exports.run = async function({ api, event, args }) {
  
  api.setMessageReaction("✔️", event.messageID, (err) => {
  }, true);
  api.sendTypingIndicator(event.threadID, true);
  
  const { messageID, threadID } = event;
  const fs = require("fs");
  const axios = require("axios");
  const request = require("request");
  const res = await axios.get(`https://raw.githubusercontent.com/MR-NAYAN-404/ERROR/main/error.json`);
  var data = res.data.data;
  let error = `${res.data.error}`;
  const prompt = args.join(" ");
  if (!args[0]) return api.sendMessage("[ ! ] Input link.", threadID, messageID);

  const content = args.join(" ");
  if (!args[1]) api.sendMessage(`𝐇𝟒𝐌𝟏𝐌 🄱🄾🅃 𝗜𝗦 𝗧𝗥𝗬𝗜𝗡𝗚 𝗧𝗢 𝗦𝗘𝗡𝗧 𝗧𝗛𝗘 𝗩𝗜𝗗𝗘𝗢 𝗪𝗔𝗜𝗧 𝗙𝗢𝗥 𝗥𝗘𝗦𝗣𝗢𝗡𝗦𝗘`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 20000));

 try { 
  let data = await axios.get(`https://052ffdc5-d547-47f5-b9d3-a96a656bbaa1-00-3s1trre0zg6jq.sisko.replit.dev//insdown?url==${content}`);
    
  var file = fs.createWriteStream(__dirname + '/cache/insta.mp4');
   
  const { link, type } = data.data.data.medias[0];
   const n = data.data.data.full_name;
   const u = data.data.data.username;
   const c = data.data.data.comment_count;
   const l = data.data.data.like_count;
   const t = data.data.data.caption;
  const rqs = request(encodeURI(`${link}`));

  rqs.pipe(file);  
  file.on('finish', () => {
    
    setTimeout(function() {
      
      return api.sendMessage({
        body: `--『 𝐇𝟒𝐌𝟏𝐌  🄱🄾🅃 』--`,
        attachment: fs.createReadStream(__dirname + '/cache/insta.mp4')
      }, threadID, messageID)
    }, 5000)
  })
    } catch (err) {
    api.sendMessage(`${error}`, event.threadID, event.messageID);  
   }
};
module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "Photo To Link By Imgur",
    commandCategory: "tool",
    usages: "[reply]",
    cooldowns: 5,
	dependencies: {
  "axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
	if(!linkanh) return api.sendMessage('[🙂]→ Please reply or enter link 1 picture image!!!', event.threadID, event.messageID)
const res = await axios.get(`https://kzz-api.ngojchaan.repl.co/imgur?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
    return api.sendMessage(`--『 𝐇𝟒𝐌𝟏𝐌 🄰🄿🄸 』--\n\nLINK : ${img}`, event.threadID, event.messageID);
	
  }
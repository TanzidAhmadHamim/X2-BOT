module.exports.config = {
	name: "not_stonk",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "put in the notstonk meme",
	commandCategory: "edit-img",
	usages: "[blank or tag]",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
   let { senderID, threadID, messageID } = event;
  var id = Object.keys(event.mentions)[0] || event.senderID;
  
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  
  let img = await new DIG.NotStonk().getImage(avatar);
  let attach = new Discord.MessageAttachment(img);
  var path_notstonk = __dirname + "/cache/notstonk.png";
  fs.writeFileSync(path_notstonk, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_notstonk)}, event.threadID, () => fs.unlinkSync(path_notstonk), event.messageID);
}
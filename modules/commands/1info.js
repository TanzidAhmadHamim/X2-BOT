module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = [
  "https://i.postimg.cc/s2nNXsnX/tanvir6x9official.jpg", 
            
            "https://i.imgur.com/Ndd1O3P.jpg", 
            
            "https://i.imgur.com/HTLhzWW.jpg",

            "https://i.imgur.com/DA7EoVx.jpg",
            
            "https://i.imgur.com/VEZNUzP.jpg",
           
            "https://i.imgur.com/N2tNu0u.jpg",
           
  "https://i.postimg.cc/s2nNXsnX/tanvir6x9official.jpg"
           ];
  
var callback = () => api.sendMessage({body:` ═════════════🄾🅆🄽🄴🅁════════════

♻️OWNER : HAMIM AHMADX 
					 & 
♻️OWNER : KOTHA AHMADX

🔰AGE : 17

♻️RELATIONSHIP : WITH KOTHA AHMADX
        
🔰ADDRESS: CHATTOGRAM, BANGLADESH

═══════════🄲🄾🄽🅃🄰🄲🅃════════════

USE [ /admin ] FOR CONTACT

🔰WEBSITE: https://hamim-website.h4m1mx2.repl.co/

USE [ /admin ] FOR CONTACT

════════════🅄🄿🅃🄸🄼🄴════════════

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

BOT NAME : ${global.config.BOTNAME}

BOT PREFIX : 💠 ${global.config.PREFIX} 💠

═════════════════════════════════

𝗜 𝗔𝗠 𝗡𝗢𝗧 𝗔 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥,\n𝗜 𝗔𝗠 𝗔 𝗠𝗢𝗗𝗜𝗙𝗜𝗘𝗥`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
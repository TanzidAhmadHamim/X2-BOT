module.exports.config = {
  name: "cg",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "kennnnn", //wag change credits, wag bobo.
  description: "Chinese video",
  commandCategory: "Chiness girl",
  usages: "type",
  cooldowns: 5
};
 
module.exports.run = async ({ api, event, Currencies}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apivideo.saikidesu-support.repl.co/tiktok?apikey=opa').then(res => {
  var image = res.data.url;
        let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `--『 𝐇𝟒𝐌𝟏𝐌 🄱🄾🅃 』--`,
            attachment: fs.createReadStream(__dirname + `/cache/video.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/video.mp4`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/video.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("you need $1000 to send cg",event.threadID,event.messageID);
    }
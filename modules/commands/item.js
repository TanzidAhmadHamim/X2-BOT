/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "hotv2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hamim",
  description: "video",
  commandCategory: "nsfw",
  usages: "item",
  cooldowns: 00,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["--𝐇𝟒𝐌𝟏𝐌--"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=1ABtEvo3Cvls7pkA4e937k9aNAL_YJc8Q",
  "https://drive.google.com/uc?id=1AFXbiWAIh90KQOqVYxHWHmv-3NKmJ76a",
 "https://drive.google.com/uc?id=1AB6SN7vCf7CD1sKiklfPHZOCzf3x8iLG",
  "https://drive.google.com/uc?id=1AC3BNRdKYOMAAS1lhu91PMkY27C0woVH",
  "https://drive.google.com/uc?id=1ACc1GddqGYPo80E4vStBvqVXA7FcdMlS",
 "https://drive.google.com/uc?id=1A67KkN-FThrW1O79ZxqioBnvvpaDVgfT", 
  "https://drive.google.com/uc?id=1A8YWpc7a1n-aDGSoQeGNO8gGphtj-HBl",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
module.exports.config = {
  name: "4ksex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Random girl",
  commandCategory: "nsfw",
  usages: "4ksex",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
     "https://nekos.fun/storage/4k/4k20853.jpg",
     "https://nekos.fun/storage/4k/3373.jpg",
     "https://nekos.fun/storage/4k/4k9048.jpg",
     "https://nekos.fun/storage/4k/6259.jpg",
     "https://nekos.fun/storage/4k/8996.jpg",
     "https://nekos.fun/storage/4k/9945.jpg",
      "https://nekos.fun/storage/4k/6174.jpg",
     "https://nekos.fun/storage/4k/4574.jpg",
     "https://nekos.fun/storage/4k/2774.jpg",
     "https://nekos.fun/storage/4k/1019.jpg",
     "https://nekos.fun/storage/4k/8324.jpg",
     "https://nekos.fun/storage/4k/3565.jpg",
      "https://nekos.fun/storage/4k/4686.jpg",
     "https://nekos.fun/storage/4k/3457.jpg",
     "https://nekos.fun/storage/4k/0906.jpg",
     "https://nekos.fun/storage/4k/7708.jpg",
     "https://nekos.fun/storage/4k/4975.jpg",
     "https://nekos.fun/storage/4k/9986.jpg",
      "https://nekos.fun/storage/4k/1720.jpg",
     "https://nekos.fun/storage/4k/4154.jpg",
     "https://nekos.fun/storage/4k/8324.jpg",
     "https://nekos.fun/storage/4k/4k13499.jpg",
     "https://nekos.fun/storage/4k/4k36242.jpg",
     "https://nekos.fun/storage/4k/2297.jpg",
     "https://nekos.fun/storage/4k/7359.jpg",
     "https://nekos.fun/storage/4k/4k20712.jpg",
     "https://nekos.fun/storage/4k/5857.jpg",
     "https://nekos.fun/storage/4k/4972.jpg",
     "https://nekos.fun/storage/4k/6074.jpg",
     "https://nekos.fun/storage/4k/3131.jpg",
      "https://nekos.fun/storage/4k/5621.jpg",
     "https://nekos.fun/storage/4k/1585.jpg",
     "https://nekos.fun/storage/4k/4k44403.jpg",
     "https://nekos.fun/storage/4k/4k44403.jpg",
     "https://nekos.fun/storage/4k/8101.jpg",
     "https://nekos.fun/storage/4k/4k36598.jpg",
      "https://nekos.fun/storage/4k/1402.jpg",
     "https://nekos.fun/storage/4k/1292.jpg",
     "httphttps://nekos.fun/storage/4k/1438.jpg",
     "https://nekos.fun/storage/4k/8892.jpg",
     "https://nekos.fun/storage/4k/6730.jpg",
     "https://nekos.fun/storage/4k/9522.jpg",
      "https://nekos.fun/storage/4k/2223.jpg",
     "https://nekos.fun/storage/4k/3426.jpg",
     "https://nekos.fun/storage/4k/6862.jpg",
     "https://nekos.fun/storage/4k/7545.jpg",
     "https://nekos.fun/storage/4k/3504.jpg",
     "https://nekos.fun/storage/4k/6510.jpg",
      "https://nekos.fun/storage/4k/4768.jpg",
     "https://nekos.fun/storage/4k/2231.jpg",
     "https://nekos.fun/storage/4k/7708.jpg",
     "https://nekos.fun/storage/4k/0685.jpg",
     "https://nekos.fun/storage/4k/1761.jpg",
     "https://nekos.fun/storage/4k/3031.jpg",
      "https://nekos.fun/storage/4k/7716.jpg",
     "hhttps://nekos.fun/storage/4k/3791.jpg",
    ];
   var callback = () => api.sendMessage({body: `--『 𝐇𝟒𝐌𝟏𝐌  🄱🄾🅃 』--`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
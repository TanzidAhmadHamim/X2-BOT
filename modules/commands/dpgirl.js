module.exports.config = {
    name: "Dpgirl",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hamim",
    description: "anime profile ",
    commandCategory: "random-img",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {

    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = [ 
 "https://i.imgur.com/qHuv5H8.jpg",
"https://i.imgur.com/atYmQt0.jpg",
"https://i.imgur.com/Kuz4Owe.jpg",
"https://i.imgur.com/L9u9Si8.jpg",
"https://i.imgur.com/2oGBtMi.jpg",
"https://i.imgur.com/MWihsUp.jpg",
"https://i.imgur.com/dPDFYxJ.jpg",
"https://i.imgur.com/AiuPHQK.jpg",
"https://i.imgur.com/6jKbMGx.jpg",
"https://i.imgur.com/H0oXAje.jpg",
"https://i.imgur.com/kKKwXkX.jpg",
"https://i.imgur.com/F5CLGkl.jpg",
"https://i.imgur.com/HKm2LKH.jpg",
"https://i.imgur.com/egaTOK5.jpg",
"https://i.imgur.com/vLGyXHX.jpg",
"https://i.imgur.com/HqJuhTj.jpg",
"https://i.imgur.com/VE6KEwT.jpg",
"https://i.imgur.com/JLC36Uu.jpg",
"https://i.imgur.com/qqt3KI1.jpg",
"https://i.imgur.com/yImrkax.jpg",
"https://i.imgur.com/sLzPtky.jpg",
"https://i.imgur.com/vfCigSS.jpg",
"https://i.imgur.com/WYVQRp1.jpg",
"https://i.imgur.com/Y1djOm5.jpg",
"https://i.imgur.com/e0mPXD9.jpg",
    ];
    var callback = () => api.sendMessage({ body: `--『 𝐇𝟒𝐌𝟏𝐌 🄱🄾🅃 』--`, attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.jpg")).on("close", () => callback());
};
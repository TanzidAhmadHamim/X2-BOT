module.exports.config = {
  name: "poli",
  version: "1.0.",
  hasPermssion: 0,
  credits: "Hamim",
  description: "generate image from polination",
  commandCategory: "image",
  usages: "query",
  cooldowns: 2,
};
module.exports.run = async ({api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
 let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("put text", threadID, messageID);
let path = __dirname + `/cache/poli.png`;
  const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: "--『 𝐇𝟒𝐌𝟏𝐌 🄱🄾🅃 』--",
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};
module.exports.config = { 
  usePrefix: true,
  name: "imagine",
  version: "1.0.",
  hasPermssion: 1,
  credits: "Hamim",
  description: "Mid January",
  commandCategory: "image",
  usages: "text to image",
  cooldowns: 2,
};
module.exports.run = async ({api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
 let { threadID, messageID } = event;
  let prompt = args.join(" ");
  if (!prompt) return api.sendMessage("Please Enter a prompt❗", threadID, messageID);
let path = __dirname + `/cache/imagine3.png`;
  const poli = (await axios.get(`https://api.samirthakuri.repl.co/api/generatev3?prompt=${prompt}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: `--『 𝐇𝟒𝐌𝟏𝐌 🄱🄾🅃 』--`,
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};
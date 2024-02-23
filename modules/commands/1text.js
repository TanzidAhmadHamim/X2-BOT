const API = "https://api-by-hamimx2.h4m1m-x2.repl.co/";

module.exports.config = { usePrefix: true,
  name: "text",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hamim",
  description: "Hamim Design",
  commandCategory: "text edit",
  usages: "X2<text>",
  cooldowns: 10,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const qs = require("querystring");

  const number = args[0];
  const text = args.slice(1).join("");

  if (!number || isNaN(number)) {
    return api.sendMessage("❗Use /text [no.] [text]\n❗Example:\n  /text 10 Hamim\nTotal Text limit 180...", event.threadID, event.messageID);
  }

  const apiEndpoint = `/api/textpro?number=${number}&text=${text}`;
  const pathSave = __dirname + `/cache/server2.png`;

  api.sendMessage("", event.threadID, event.messageID);

  axios
    .get(API + apiEndpoint, { responseType: "arraybuffer" })
    .then((data) => {
      const imageBuffer = data.data;
      fs.writeFileSync(pathSave, Buffer.from(imageBuffer));
      api.sendMessage(
        {
    body: `--『 𝐇𝟒𝐌𝟏𝐌 🄱🄾🅃 』--`,
          attachment: fs.createReadStream(pathSave),
        },
        event.threadID,
        () => fs.unlinkSync(pathSave)
      );
    })
    .catch((error) => {
      let err;
      if (error.response) {
        err = JSON.parse(error.response.data.toString());
      } else {
        err = error;
      }
      return api.sendMessage("ERROR ❌\nHAMIM X2 Server Busy😓🥹", event.threadID, event.messageID);
    });
};
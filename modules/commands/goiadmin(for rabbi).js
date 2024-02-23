module.exports.config = {
  name: "goiadminrabbi",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100078767378251","100078767378251","100078767378251") {
    var aid = ["100078767378251","100078767378251","100078767378251"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["ADMIN RABBI RE KHUJTESO?...☠️☠️..Wait Koro Ashtese.😇🥰"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
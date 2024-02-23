module.exports.config = {
  name: "goiadminkotha",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100083267280269","100083267280269","100083267280269") {
    var aid = ["100083267280269","100083267280269","100083267280269"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Ufff🥵..☠️ Etto dakte hoi amar Boss er bow tare.. inbox er permission nai❌ ja bolba hamim boss re bolo 😒 kotha mam just hamim boss er.. mind it..🤙"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
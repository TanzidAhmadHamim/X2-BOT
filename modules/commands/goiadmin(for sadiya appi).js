module.exports.config = {
  name: "goiadminsadiya",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100092016494322","100092016494322","100092016494322") {
    var aid = ["100092016494322","100092016494322","100092016494322"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Ufff🥵..☠️ Etto dakte hoi amar cutee sadiya mam tare..inbox koro single cute ekta meye amar mam ta✅ inbox korte parba but cesrami korba nah..❌"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
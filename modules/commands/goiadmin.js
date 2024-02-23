module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100080456630885","100080456630885","100080456630885") {
    var aid = ["100080456630885","100080456630885","100080456630885"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Ufff🥵..☠️ Etto dakte hoi amar Boss tare..inbox koro meye hoile permission nai❌"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
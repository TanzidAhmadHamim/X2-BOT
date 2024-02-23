module.exports.config = {
  name: "goiadminnirob",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61550009932916","61550009932916","61550009932916") {
    var aid = ["61550009932916","61550009932916","61550009932916"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Ufff...Nirob tare mention dio nah..inbox koro meye hoile permission ace✅"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
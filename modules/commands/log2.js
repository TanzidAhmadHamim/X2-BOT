﻿module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hamim",
  description: "log",
  commandCategory: "System",
  usages: "edit",
  cooldowns: 3,
  denpendencies: {
  }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var tagadmin = data.tagadmin;
  var guard = data.guard;
  var antiout = data.antiout;
  //prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `ON✅` : log = `${log}`;
  rankup == null ? rankup = `ON✅` : rankup = `${rankup}`;
  resend == null ? resend = `BAN⛔` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `ON✅` : tagadmin = `${tagadmin}`;
  guard == null ? guard = `ON✅` : guard = `${guard}`;
  antiout == null ? antiout = `ON✅` : antiout = `${antiout}`;
return api.sendMessage(`♛🅱🅾🆃 is ACTIVE now ☑\n\n───🄾🅆🄽🄴🅁────\n\n💌𝗛𝗔𝗠𝗜𝗠 [ Kɪɴɢ ]\n💌𝗞𝗢𝗧𝗛𝗔 [ Qᴜᴇᴇɴ ]\n\n🌸────•🦋•────🌸\n  ❄️ Prefix: ${prefix}\n  🔰 Log: ${log}\n  ⏫ Rankup: ${rankup}\n  ♻️ Resend: ${resend}\n  📛 Tag admin: ${tagadmin}\n  ⚜️ Antirobbery: ${guard}\n  ⚡ Antiout: ${antiout}\n🌸────•🦋•────🌸`, threadID, messageID);
}

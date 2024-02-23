module.exports.config = {
  name: "log",
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
  log == null ? log = `True` : log = `${log}`;
  rankup == null ? rankup = `False` : rankup = `${rankup}`;
  resend == null ? resend = `False` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `True` : tagadmin = `${tagadmin}`;
  guard == null ? guard = `True` : guard = `${guard}`;
  antiout == null ? antiout = `True` : antiout = `${antiout}`;
return api.sendMessage(`ᅠᅠ	    ☣️ Table ☣️ \n\n────🄾🅆🄽🄴🅁────\n\n💌𝗛𝗔𝗠𝗜𝗠 𝗛𝗢𝗦𝗘𝗡𝗫 [ Kɪɴɢ ]\n💌𝗞𝗢𝗧𝗛𝗔 𝗔𝗛𝗠𝗔𝗗𝗫 [ Qᴜᴇᴇɴ ]\n\n────🄼🄾🄳🅂────\n\n😇PH Rabbi ➤ ᴀᴅᴍɪɴ\n\n🌸───•🦋• ────🌸\n  ❄️ Prefix: ${prefix}\n  🔰 Log: ${log}\n  ⏫ Rankup: ${rankup}\n  ♻️ Resend: ${resend}\n  📛 Tag admin: ${tagadmin}\n  ⚜️ Antirobbery: ${guard}\n  ⚡ Antiout: ${antiout}\n🌸────•🦋• ────🌸`, threadID, messageID);
}

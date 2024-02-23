module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`কিরে😂 ${name} তোর এতো বড়ো সাহস😈আমি  পিচ্ছি Hamim
 বট থাকতে লিভ নেস😂 :( `, event.threadID)
   } else api.sendMessage(`কিরে😈 ${name} কোথায় পালাস আমি পিচ্ছি Hamim বট থাকতে পালাতে পারবি না🤣😂`, event.threadID);
  })
 }
                            }
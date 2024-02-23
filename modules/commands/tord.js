const fs = require('fs');
 
module.exports.config = {
    name: "tord",
    version: "1.0",
    credits: "Hamim",
    hasPermssion: 0,
    cooldowns: 5,
    commandCategory: "Games",
    description: "play truth or dare", 
  },
 
  module.exports.run = async function ({ api, args, event }) {
 
  let { threadID, senderID, messageID} = event;
      
  const getUserInfo = async (api, userID) => {
    try {
      const userInfo = await api.getUserInfo(userID);
      return userInfo[userID].firstName;
    } catch (error) {
      console.error(`Error fetching user info: ${error}`);
      return "";
    }
  };
      
  const muiEmojis = () => {
  const muichiroEmojis = ["😀", "😃", "😄", "😁", "🙂", "😉", "😊", "☺️", "🥲", "🤭", "🫡", "😏", "😌", "✌️", "👌", "🫰", "🫶", "🙆", "💙", "🩵"];
    return muichiroEmojis[Math.floor(Math.random() * muichiroEmojis.length)];
  };  
 
  let choices = ['truth', 'dare'];
 
  if (!args || args.length === 0) {
      const userInfo = await getUserInfo(api, senderID);
        api.sendMessage({body:`${userInfo},আপনি যদি Truth or dare খেলতে চান। তাহলে লেখেন '#tord truth'অথবা '#tord dare'`,mentions: [
          {
            tag: userInfo,
            id: senderID,
          },
        ],}, threadID, messageID);
        return;
    }
 
  let userChoice = args[0];
  
    if (userChoice === 'truth') {
        const userInfo = await getUserInfo(api, senderID);
        const emojis = muiEmojis();
      const truthQuestions = JSON.parse(fs.readFileSync(`${__dirname}/cache/TRUTHQN.json`));
      const randomTruth = truthQuestions[Math.floor(Math.random() * truthQuestions.length)];      
      api.sendMessage({body:`${userInfo}, HAMIM GOD SERVER থেকে এই Truth টা দেওয়া হলো:\n\n${randomTruth} ${emojis}\n\nTRUTH বলবেন,নাহলে আপনার বউ Hamim এর।।${emojis}`, mentions: [
          {
            tag: userInfo,
            id: senderID,
          },
        ],}, threadID, messageID);
    }
    
    else if (userChoice === 'dare') {
        const userInfo = await getUserInfo(api, senderID);
        const emojis = muiEmojis();
      const dareChallenges = JSON.parse(fs.readFileSync(`${__dirname}/cache/DAREQN.json`));
      const randomDare = dareChallenges[Math.floor(Math.random() * dareChallenges.length)];     
      api.sendMessage({body:`${userInfo}, HAMIM GOD SERVER থেকে এই Dare টা দেওয়া হলো:\n\n${randomDare} ${emojis}\n\nDARE টা সম্পুর্ণ করবেন নাহলে ভাববো আপনি একটা ভীতু।।${emojis}`, mentions: [
          {
            tag: userInfo,
            id: senderID,
          },
        ],}, threadID, messageID);
    } 
 
     else{
         const userInfo = await getUserInfo(api, senderID);
       api.sendMessage({body:`ভুল লিখবেন না ${userInfo},'truth' or 'dare' থেকে একটা লিখেন`,mentions: [
          {
            tag: userInfo,
            id: senderID,
          },
        ],}, threadID, messageID);
     };
} 
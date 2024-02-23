const fs = require("fs");

module.exports.config = {
  name:"6565",
  version: "1.1.0",
  hasPermssion: 0,
  credits: "Hamim",
  description: "Engage in conversation with Kotha!",
  usePrefix: false,
  commandCategory: "chatbots",
  usages: "Chat with Kotha",
  cooldowns: 2,
};

module.exports.run = function ({ api, event, args }) {
  const { messageID, threadID, senderID } = event;
  const content = args.join(" ");
  if (!args[0]) return api.sendMessage("bolo vai or boin ki korte pari?..", threadID, messageID);

  try {
    const jsonFile = fs.readFileSync(__dirname + "/cache/KOTHA/kotha.json", "utf-8");
    const responses = JSON.parse(jsonFile);
    let respond = responses[content.toLowerCase()];

    if (content.startsWith("add = ")) {
      const switchCase = content.substring(6).toLowerCase();
      if (!global.config.ADMINBOT.includes(senderID)) {
        respond = "তুমার বয়স হই নাই।GOD HAMIM HOSENX CAN USE";
      } else {
        if (switchCase === "on") {
          respond = "Add function activated.";
          if (typeof global.config.ADD_FUNCTION !== "undefined")
            global.config.ADD_FUNCTION = true;
          else
            console.log("Having some error on getting JSON");
        } else if (switchCase === "off") {
          respond = "Add function deactivated.";
          if (typeof global.config.ADD_FUNCTION !== "undefined")
            global.config.ADD_FUNCTION = false;
          else
            console.log("Having some error on getting JSON");
        }
      }
    } else if (content.startsWith("del = ")) {
      const switchCase = content.substring(6).toLowerCase();
      if (!global.config.ADMINBOT.includes(senderID)) {
        respond = "তুমার বয়স হই নাই।GOD HAMIM HOSENX CAN USE";
      } else {
        if (switchCase === "on") {
          respond = "Delete function activated. You can now delete words and responses";
          if (typeof global.config.DEL_FUNCTION !== "undefined")
            global.config.DEL_FUNCTION = true;
          else
            console.log("Having some error on getting JSON");
        } else if (switchCase === "off") {
          respond = "Delete function deactivated.";
          if (typeof global.config.DEL_FUNCTION !== "undefined")
            global.config.DEL_FUNCTION = false;
          else
            console.log("Having some error on getting JSON");
        }
      }
    } else if (content.includes("=!")) {
      const [word, response] = content.split("=!").map((item) => item.trim());
      const lowercaseWord = word.toLowerCase();
      if (!global.config.DEL_FUNCTION) {
        respond = "Delete function is currently deactivated.";
      } else {
        if (responses[lowercaseWord]) {
          if (response) {
            const index = responses[lowercaseWord].indexOf(response);
            if (index !== -1) {
              responses[lowercaseWord].splice(index, 1);
              if (responses[lowercaseWord].length === 0) {
                delete responses[lowercaseWord];
              }
              fs.writeFileSync(__dirname + "/cache/KOTHA/kotha.json", JSON.stringify(responses, null, 4), "utf-8");
              respond = `Successfully deleted the response "${response}" from the word "${word}"`;
            } else {
              respond = `The response "${response}" does not exist in the word "${word}"`;
            }
          } else {
            delete responses[lowercaseWord];
            fs.writeFileSync(__dirname + "/cache/KOTHA/kotha.json", JSON.stringify(responses, null, 4), "utf-8");
            respond = `Successfully deleted the entire responses inside the word "${word}" FROM HAMIM GOD SERVER`;
          }
        } else {
          respond = `The word "${word}" does not exist in the responses`;
        }
      }
    } else if (content.includes("=>")) {
      const [word, ...responseArray] = content.split("=>").map((item) => item.trim());

      const response = responseArray.join("=>").trim();
      if (!global.config.ADD_FUNCTION) {
        respond = "Add function is currently deactivated.";
      } else {
        if (word && response) {
          const lowercaseWord = word.toLowerCase();
          if (responses[lowercaseWord]) {
            if (!responses[lowercaseWord].includes(response)) {
              responses[lowercaseWord].push(response);
            }
          } else {
            responses[lowercaseWord] = [response];
          }
          fs.writeFileSync(__dirname + "/cache/KOTHA/kotha.json", JSON.stringify(responses, null, 4), "utf-8");
          respond = `Successfully added in GOD HAMIM SERVER "${word}" as a new word with the response: "${response}"`;
        }
      }
    }

    if (Array.isArray(respond)) {
      const randomIndex = Math.floor(Math.random() * respond.length);
      respond = respond[randomIndex];
    } else if (!respond) {
      respond = " আমাকে এখনো শিখাই নাই।।একটু আমার জামাই হামীম কে বলেন শিখাই দিতে।।";
    }

    api.sendMessage(respond, threadID, (error, info) => {
      if (error) {
        console.error(error);
      }
    }, messageID);
  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while processing the request.", threadID, messageID);
  }
};

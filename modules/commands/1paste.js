let PastebinAPI = require('pastebin-js');
let fs = require('fs');
let path = require('path');

let pastebin = new PastebinAPI({
  api_dev_key: 'U2g85byfTiSJJ4N6NWSP17gPAROVuZXo', // Replace with your API key
  api_user_key: 'U2g85byfTiSJJ4N6NWSP17gPAROVuZXo' // Replace with your API key
});

module.exports.config = {
  name: "paste",
  version: "1.0",
  credits: "OtinXSandip",
  cooldowns: 5,
  hasPermission: 2,
  description: "This command allows you to upload files and text to pastebin and send the link to the file.",
  commandCategory: "Utility",
  usages: "To use this command, type !paste file <name> or paste text <text>."
};

module.exports.run = async function (params) {
  let { api, event, args } = params;
  let { threadID, messageID, senderID } = event;

  let permission = ["100080456630885", ""]; // Update with valid sender IDs
  if (!permission.includes(senderID)) {
    return api.sendMessage("Bitch, Only my Boss Hamim can use this👿", threadID, messageID);
  }

  if (!args[0]) {
    return api.sendMessage('Please learn how to use $paste text (words) or paste file (filename)', threadID);
  }

  if (args[0] === "text") {
    let text = args.slice(1).join(" ");
    try {
      let paste = await pastebin.createPaste({
        text: text,
        title: "Text Paste",
        format: null,
        privacy: 1,
      });

      let rawPaste = paste.replace("pastebin.com", "pastebin.com/raw");

      api.sendMessage(`Text created ✅ \n🔗 Text Link: ${rawPaste}`, threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage('An error occurred while pasting the text.', threadID);
    }
  } else if (args[0] === "file") {
    let fileName = args[1];
    let filePathWithoutExtension = path.join(__dirname, '..', 'commands', fileName);
    let filePathWithExtension = path.join(__dirname, '..', 'commands', fileName + '.js');

    if (!fs.existsSync(filePathWithoutExtension) && !fs.existsSync(filePathWithExtension)) {
      return api.sendMessage('File not found!', threadID);
    }

    let filePath = fs.existsSync(filePathWithoutExtension) ? filePathWithoutExtension : filePathWithExtension;

    fs.readFile(filePath, 'utf8', async (err, data) => {
      if (err) throw err;

      try {
        let paste = await pastebin.createPaste({
          text: data,
          title: fileName,
          format: null,
          privacy: 1,
        });

        let rawPaste = paste.replace("pastebin.com", "pastebin.com/raw");

        api.sendMessage(`
File created ✅\nfile name: ${fileName}.js\n🔗 Link: ${rawPaste}`, threadID);
      } catch (error) {
        console.error(error);
        api.sendMessage('An error occurred while pasting the file.', threadID);
      }
    });
  } else {
    api.sendMessage('Please learn how to use $paste text (words) or paste file (filename)', threadID);
  }
};
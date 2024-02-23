const axios = require("axios");

module.exports.config = {
    name: "meta",
    version: "1",
    hasPermission: 0,
    credits: "Hamim",
    description: "Simsimi",
    usages: "Message",
    commandCategory: "...",
    cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
    try {
        let message = args.join(" ");
        if (!message) {
            return api.sendMessage(`Hi jaaan,I'm X2 meta from X2 server..`, event.threadID, event.messageID);
        }

        const response = await axios.get(`https://052ffdc5-d547-47f5-b9d3-a96a656bbaa1-00-3s1trre0zg6jq.sisko.replit.dev//sim?type=ask&ask=${message}`);
        const respond = response.data.answer;
        api.sendMessage(respond, event.threadID, event.messageID);
    } catch (error) {
        console.error("An error occurred:", error);
        api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
    }
};
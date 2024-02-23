module.exports.config = {
    name: "rps",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Hamim",
    description: "Play the game of Rock Paper Scissors with GOD HAMIM",
    commandCategory: "Utility",
    usages: "#rps",
    cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    if (!args || args.length === 0) {
        api.sendMessage("'rock', 'paper', or 'scissors'\n\nএই ৩টা থেকে একটা লিখেন।।", event.threadID);
        return;
    }

    let userChoice = args[0];
    
    if (!userChoice || !choices.includes(userChoice)) {
        api.sendMessage("Invalid choice, please choose either 'rock', 'paper', or 'scissors'", event.threadID);
        return;
    }
    
    if (userChoice === computerChoice) {
        api.sendMessage("It's a tie! আপনি এবং GOD HAMIM একই রকম ব্যবহার করেছেন।। " + userChoice, event.threadID);
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        api.sendMessage("You win! Rock beats scissor..", event.threadID);
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        api.sendMessage("You win! Paper beats rock..", event.threadID);
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        api.sendMessage("You win! Scissors beats paper..", event.threadID);
    } else {
        api.sendMessage("You lose! " + computerChoice + " beats " + userChoice, event.threadID);
    }
};
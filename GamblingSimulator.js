const prompt = require('prompt-sync')();

class GamblingSimulator {

    simulation = () => {
        var stake = 100;
        var day = 1;
        var winStake = 100;
        var lostStake = 100;
        var winningMap = new Map();
        var loosingMap = new Map();
        var dailyWin = 0;
        var winAmount;
        var lostAmount;

        console.log(`------ Gambler starts with stake of $100 and bet $1 every day ------`);

        var getRandomValue = () => Math.floor(Math.random() * 2);

        var continueToPlay = (winAmount, lostAmount) => {

            if (winAmount > lostAmount) {
                console.log(`\n Your total won amount is ${winAmount}`);
               var userChoice = prompt(` Congrats You won , would you like to continue for next month press Yes - 0 , No - 1`);

                switch ((userChoice == 0) ? "continue" : "stop") {
                    case "continue":
                        console.log(`you can start playing for next month`);
                        //simulation();
                        break;
                    case "stop":
                        console.log("congrats you won and decided to stop playing for next month");
                        break;
                    default:
                        console.log("No match");
                }
            } else
                console.log("Oops you lost ");
        }

        while (day <= 30) {
            if (getRandomValue() == 0) {
                lostStake = lostStake - 1;
                console.log(`amount after loose for a day ${day} is: ${lostStake}`);
                var lostAmount = stake - lostStake;
                console.log(`Total lost amount  is: ${lostAmount}\n`);
            }
            else {
                winStake = winStake + 1;
                console.log(`amount after win for a day ${day} is: ${winStake}`);
                var winAmount = winStake - stake;
                console.log(`Total win amount is: ${winAmount} \n`);
            }

            var winAmount = winStake - stake;
            var lostAmount = stake - lostStake;

            if (winAmount > lostAmount) {
                var wonForDay = winAmount - lostAmount;
                console.log(`Day ${day} win by: ${wonForDay}`);
                winningMap.set(day, wonForDay);
            }
            else {
                var lostForDay = lostAmount - winAmount;
                console.log(`Day ${day} lost by: ${lostForDay}`);
                loosingMap.set(day, lostForDay)
            }
            day++;
        }

        console.log(`\n day and amount won is :`);
        console.log(winningMap)

        let invertedMap = new Map([...winningMap.entries()].map(
            ([key, value]) => ([value, key]))
        );
        let maxWin = console.log(Math.max(...winningMap.values()))
        console.log(invertedMap.get(maxWin))

        console.log(`\n day and amount loss is :`);
        console.log(loosingMap)
        let maxLoose = console.log(Math.max(...loosingMap.values()))
        let invertedMapLoose = new Map([...loosingMap.entries()].map(
            ([key, value]) => ([value, key]))
        );

        console.log(invertedMapLoose.get(`${maxLoose}`))

        continueToPlay(winAmount, lostAmount)
    }
}

module.exports = new GamblingSimulator();
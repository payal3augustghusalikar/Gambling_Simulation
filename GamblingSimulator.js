

class GamblingSimulator {
    
    simulation = () => {
        var stake = 100;
        var day = 1;
        var winStake = 100;
        var lostStake = 100;
        let array = [];
        array.length = 30;
        var winningMap = new Map();
        var loosingMap = new Map();
        var dailyWin = 0;
        var winAmount;
        var lostAmount;

        console.log(`------ Gambler starts with stake of $100 and bet $1 every day ------`);

        var getRandomValue = () => Math.floor(Math.random() * 2);
        while (day <= 30) {
       

            if (getRandomValue() == 0) {
                lostStake = lostStake - 1;
                console.log(`amount after loose for a day ${day} is: ${lostStake}`);

            }
            else {
                winStake = winStake + 1;
                console.log(`amount after win for a day ${day} is: ${winStake}`);
            }

            var winAmount = winStake - stake;
            var lostAmount = stake - lostStake;
            console.log(`Win amount of day ${day} is: ${winAmount} and Lost amount of day ${day}  is: ${lostAmount}`);

            if (winAmount > lostAmount) {

                console.log(`Day ${day} win by: ${winAmount - lostAmount}`);
                winningMap.set(day, `${winAmount - lostAmount}`);
            }
            else {
                console.log(`Day ${day} lost by: ${lostAmount - winAmount}`);
                loosingMap.set(day, `${lostAmount - winAmount}`)
            }
            day++;
        }
       
        console.log(`\n day and amount won is :`);
        console.log(winningMap)
        let maxWin = console.log(Math.max(...winningMap.values()))

         let invertedMap = new Map([...winningMap.entries()].map(
             ([key, value]) => ([value, key]))
         );

         console.log(invertedMap.get(maxWin))

        console.log(`\n day and amount loss is :`);
        console.log(loosingMap)
        let maxLoose = console.log(Math.max(...loosingMap.values()))
    }
}

module.exports = new GamblingSimulator();
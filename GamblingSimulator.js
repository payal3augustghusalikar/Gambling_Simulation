class GamblingSimulator {

    simulation = () => {
        var stake = 100;
        var day = 1;
        var winStake = 100;
        var lostStake = 100;
        console.log(`------ Gambler starts with stake of $100 and bet $1 every day ------`);

        var getRandomValue = () => Math.floor(Math.random() * 2);
        while (day <= 20) {
            if (getRandomValue() == 0) {
                lostStake = lostStake - 1;
                console.log(`amount after loose for a day is: ${lostStake}`);
            }
            else {
                winStake = winStake + 1;
                console.log(`amount after win for a day is: ${winStake}`);
            }
            var winAmount = winStake - stake;
            var lostAmount = stake - lostStake;
            console.log(`Win amount of day ${day} is: ${winAmount} and Lost amount of day ${day}  is: ${lostAmount}`);
            day++;
        }
    }
}

module.exports = new GamblingSimulator();
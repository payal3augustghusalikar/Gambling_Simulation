class GamblingSimulator {

    simulation = () => {
        var stake = 100;
        var day = 1;
        var winStake = 100;
        var lostStake = 100;
        console.log(`Gambler starts with stake of $100 and bet $1 every day`);

        var getRandomValue = () => Math.floor(Math.random() * 2);
        console.log(getRandomValue());
        if (getRandomValue() == 0) {
            lostStake = lostStake - 1;
            console.log(`********Gambler Loose********** `);
            console.log(`amount is: ${lostStake}`);
        }
        else {
            winStake = winStake + 1;
            console.log(`********Gambler Win**********`);
            console.log(`amount is: ${winStake}`);
        }
    }
}
module.exports = new GamblingSimulator();
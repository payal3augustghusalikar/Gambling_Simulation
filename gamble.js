var stake = 100;
const BET_AMOUNT = 1;
var fiftyPercentageLoss = stake - (stake / 100) * 50;
var fiftyPercentageWin = stake + (stake / 100) * 50;
//var maximumWinMonth;
//var maxiMumLossMonth;
var NumberOfDaysPerMonth = {
    "Jan": 31, "Feb": 28, "Mar": 31, "Apr": 30, "May": 31, "Jun": 30,
    "jul": 31, "Aug": 31, "Sep": 30, "Oct": 31, "Nov": 30, "Dec": 31
};
var dayNameMap = {
    "1": "mon", "2": "Tue", "3": "Wed", "4": "Thu",
    "5": "Fri", "6": "Sat", "7": "Sun"
};
var dayCountMapforMaxWin = {
    "1": 0, "2": 0, "3": 0, "4": 0,
    "5": 0, "6": 0, "7": 0
};
var dayCountMapforMaxLoss = {
    "1": 0, "2": 0, "3": 0, "4": 0,
    "5": 0, "6": 0, "7": 0
};

//check for win or loss
checkWinOrLoss = () => {
    ((Math.floor(Math.random() * 10) % 2) == BET_AMOUNT) ? (result = true) : (result = false);

    return result;
}

//This mthod for resign for the day if 50% loss or 50% win and re
resignDay = () => {
    let cash = stake;
    while (cash < fiftyPercentageWin && cash > fiftyPercentageLoss) {
        checkWinOrLoss() ? (cash = cash + 1) : (cash = cash - 1);
    }
    return cash;
}

//Print record month wise
printMonthlyRecord = (monthName, totalLostAmount, totalWonAmount, numberOfLostDays, numberOfWonDays) => {
    console.log(`\nmonth       :  ${monthName}`);
    console.log(`loss ammont :  ${totalLostAmount}`);
    console.log(`Won ammount :  ${totalWonAmount}`);
    console.log(`lost days   :  ${numberOfLostDays}`);
    console.log(`won days    :  ${numberOfWonDays}`);
}

//Find Luckiest day and return it 
findLuckiestDay = () => {
    var maxWinValue = 0;
    var winKey = 1;

    for (let index = 1; index < Object.keys(dayCountMapforMaxWin).length; index++) {
        if (maxWinValue < dayCountMapforMaxWin[index]) {
            maxWinValue = dayCountMapforMaxWin[index];
            winKey = index;
        }
    }

    return dayNameMap[winKey];
}

//Find Unluckiest day and return it 
findUnLuckiestDay = () => {
    var maxLossValue = 0;
    var LossKey = 1;
    for (let index = 0; index < Object.keys(dayCountMapforMaxLoss).length; index++) {
        if (maxLossValue < dayCountMapforMaxLoss[index]) {
            maxLossValue = dayCountMapforMaxLoss[index];
            LossKey = index;
        }
    }

    return dayNameMap[LossKey];
}

//Function to take decision whether continue from next months or not
decideToContinuePlay = (totalLostAmount, totalWonAmount) => {
    const prompt = require('prompt-sync')();
    var decided;
    const YES = 1;
    const NO = 2;

    if (totalWonAmount > totalLostAmount) {
        let userChoice = Number(prompt(`\nYou won , would you like to continue....gambling 
        Yes - 1 No - 2\n`));

        switch (userChoice) {
            case YES:
                decided = true;
                break;
            case NO:
                decided = false;
                break;
            default:
                console.log("No match");
        }
    } else {
        console.log("Have loss in this month so stop playing from next month ");
        decided = false;
    }

    return decided;
}

//This method is for play and update win and loss money day wise
gamblingToatalAmountUpdate = () => {
    for (var monthName in NumberOfDaysPerMonth) {
        var winOrLossMoney = 0;
        var day = 1;
        var numberOfWonDays = 0;
        var numberOfLostDays = 0;
        var totalWonAmount = 0;
        var totalLostAmount = 0;
        var dayCount = 1;
        var index = 1;

        while (day <= NumberOfDaysPerMonth[monthName]) {
            if (dayCount > 7) {
                dayCount = 1;
                index = 1;
            }

            if (resignDay() == fiftyPercentageWin) {
                winOrLossMoney = fiftyPercentageWin - stake;
                totalWonAmount = totalWonAmount + winOrLossMoney;

                dayCountMapforMaxWin[index]++;
                numberOfWonDays++;
            }
            else {
                winOrLossMoney = stake - fiftyPercentageLoss;
                totalLostAmount = totalLostAmount + winOrLossMoney;

                dayCountMapforMaxLoss[index]++;
                numberOfLostDays++;
            }

            day = day + 1;
            dayCount++;
            index++;
        }

        printMonthlyRecord(monthName, totalLostAmount, totalWonAmount, numberOfLostDays, numberOfWonDays);

        if (decideToContinuePlay(totalLostAmount, totalWonAmount)) {
            continue;
        }
        else {
            break;
        }

    }
}

console.log(`Welcome to Gambling Simulator`);
gamblingToatalAmountUpdate();
console.log(`Luckiest day     ${findLuckiestDay()}`);
console.log(`Unluckiest day   ${findUnLuckiestDay()}`);

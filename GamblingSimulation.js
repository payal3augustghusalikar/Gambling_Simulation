const gamblersimulator = require('./GamblingSimulator');

class GamblingSimulationMain {
    gambler = () => {
        console.log(`\n****** Welcome to Gambling Simulation Problem *******\n`);
        gamblersimulator.simulation();
    }
}
const object = new GamblingSimulationMain();
object.gambler();
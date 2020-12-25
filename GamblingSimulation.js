const gamblersimulator = require('./GamblingSimulator');
//const GamblingSimulator=require('./GamblingSimulato');

class GamblingSimulationMain {
    gambler = () => {
        console.log(`\n****** Welcome to Gambling Simulation Problem *******\n`);
        gamblersimulator.simulation();
       // gambler.simulat();
    }
}
const object = new GamblingSimulationMain();
object.gambler();
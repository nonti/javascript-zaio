const uberRide = 200;
const driverCommision = 70 / 100;
const nameOfDriver = "Nontys";
const uberDrviverEarning = uberRide * driverCommision;
const uberEarning = uberRide - uberDrviverEarning;

// const output =
//     "From a ride costing R" + uberRide +
//     "," +
//     nameOfDriver +
//     " earns R" +
//     parseInt(uberDrviverEarning) +
//     " with 70% commision, while Uber earns R" +
//         parseInt(uberEarning) +
//     " with 30% commission";

const output = `From a ride costing R${uberRide}, ${nameOfDriver}
 earns R${uberDrviverEarning} with a 70% commission,
  while Uber earns R${uberEarning} with a 30% commission.`;
console.log(output);

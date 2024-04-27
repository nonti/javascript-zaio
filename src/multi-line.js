const uberRide = 200;
const driverCommission = 70 / 100;
const nameOfDriver = "Nonty";
const uberDriverEarning = uberRide * driverCommission;
const uberEarning = uberRide - uberDriverEarning;



const output = `From a ride cost R${uberRide},
    ${nameOfDriver} earns ${uberDriverEarning} with a "70%" commission, 
    while Uber earns ${uberEarning} with a 30% commission`;
// const output = "From a ride costing R" + uberRide + ",\n" + nameOfDriver + " earns R" + parseInt(uberDriverEarning) + " with a '70%' commission,\nwhile Uber earns R" + uberEarning + "with a '30%' commission";

console.log(output);
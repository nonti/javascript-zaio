const uberRide = 85;
const driverCommission = (70 / 100);

const uberDrviverEarning = uberRide * driverCommission;
const uberEarning = uberRide - uberDrviverEarning;
console.log("Earning: ", uberEarning , uberDrviverEarning);
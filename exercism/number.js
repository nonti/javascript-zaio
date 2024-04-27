function dayRate(ratePerHour) {
    const ratePerDay = ratePerHour * 8;
    
    return ratePerDay;
}

console.log(dayRate(89));

function dayInBudget(budget, ratePerHour) {
    const totalBudget = Math.ceil(budget / ratePerHour / 8);
    const numberOfDays = totalBudget;
    return numberOfDays;
}

console.log(dayInBudget(835, 12));

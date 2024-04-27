// input, action , output
// input: amount, number of people
// action: find the amount each person has to pay
//output: amount each person  pays

function splitBill(amount, numberOfPeople) {
    const amountToPay = amount / numberOfPeople;

    return `Each person has to pay R${Math.ceil(amountToPay)}`;
}

console.log(splitBill(12000, 8));
console.log(splitBill(12700, 9));

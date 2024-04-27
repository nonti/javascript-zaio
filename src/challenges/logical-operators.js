/**
1) Create a JavaScript program that calculates the discount for a purchase based on the following rules:

If the customer is a member (isMember is true), they receive a 10% discount.
If the customer is a VIP (isVIP is true), they receive a 20% discount.
If the customer is both a member and a VIP, they receive a 30% discount.
If the customer is neither a member nor a VIP, they receive no discount.
2) You need to calculate the final discounted amount based on these conditions and store it in a variable named discountedAmount. Print the discountedAmount to the console.
Hint:
You can use JavaScript's if-else statements in combination with logical operators && and || to implement this. Start by checking if the customer is both a member and a VIP, and then check other conditions.
 */

const isMember = false;
const isVIP = true;
const purchaseAmount = 100;
let discountedAmount;
let discount;

function calculateDiscount() {
    if (isMember && isVIP) {
        discount = 30;
    } else if (isVIP) {
        discount = 20;
    } else if (isMember) {
        discount = 10;
    } else {
        discount = 0;
    }

    discountedAmount = purchaseAmount - (purchaseAmount * discount / 100);
    return discountedAmount;
}


console.log(calculateDiscount());
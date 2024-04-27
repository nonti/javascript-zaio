/*
1) Create an initial account object with a balance of 0. This object will represent a user's bank account.
2) Implement the following functions:
a. deposit(account, amount): This function should take the account object and an amount as parameters and add the amount to the account's balance. It should return the updated balance.
withdraw(account, amount): This function should take the account object and an amount as parameters and subtract the amount from the account's balance. It should return the updated balance.
getBalance(account): This function should take the account object as a parameter and return the current balance.
transfer(fromAccount, toAccount, amount): This function should transfer the specified amount from fromAccount to toAccount. It should update the balances in both accounts and return the updated balance of fromAccount.
*/

// Given Input
const account1 = { balance: 100 };
const account2 = { balance: 50 };

// Your code here
function deposit(account, amount) {
    account.balance += amount;
    return account.balance;
}

function withdraw(account, amount) {
    if (account.balance >= amount) {
        account.balance -= amount; 
        
        return account.balance;
    } else {
        return "Inssuffiecient Funds";
    }
    
}

function getBalance(account) {
    return account.balance;
}

function transfer(fromAccount, toAccount, amount) {
    if (fromAccount.balance < amount) {
        return fromAccount.balance;
    }
    fromAccount.balance -= amount;
    toAccount.balance += amount;

    return fromAccount.balance;
}

// Output
console.log(deposit(account1, 50)); // Output: 150
console.log(withdraw(account1, 30)); // Output: 120
console.log(getBalance(account1));  // Output: 120
console.log(transfer(account1, account2, 20)); // Output: 100 (fromAccount's balance after transfer)
console.log(getBalance(account2)); // Output: 70 (toAccount's balance after transfer)
/*
Another way 
const account1 = { balance: 100 };
const account2 = { balance: 50 };

function deposit(account, amount) {
    if(amount > 0){
        account.balance += amount;
    return account.balance;
    }else{
        return "Invalid amount. Please enter a positive number"
    }
    
}

function withdraw(account, amount) {
    if (account.balance >= amount) {
        account.balance -= amount; 
        
        return account.balance;
    } else {
        return "Insufficient Funds";
    }
    
}

function getBalance(account) {
    return account.balance;
}

function transfer(fromAccount, toAccount, amount) {
    if (fromAccount.balance < amount) {
        return "Insufficient Funds";
    }
    
    fromAccount.balance -= amount;
    toAccount.balance += amount;

    return fromAccount.balance;
}


console.log(deposit(account1, 50)); // Output: 150
console.log(withdraw(account1, 30)); // Output: 120
console.log(getBalance(account1));  // Output: 120
console.log(transfer(account1, account2, 20)); // Output: 100 (fromAccount's balance after transfer)
console.log(getBalance(account2)); // Output: 70 (toAccount's balance after transfer)

*/
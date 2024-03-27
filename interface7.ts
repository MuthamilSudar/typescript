
abstract class Account {
    accountNumber: number;
    accountHolderName: string;
    accountHolderAge: number;
    balance: number;

    constructor(accountNumber: number, accountHolderName: string, accountHolderAge: number, balance: number) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountHolderAge = accountHolderAge;
        this.balance = balance;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
}


class ChildAccount extends Account {
    constructor(accountNumber: number, accountHolderName: string, accountHolderAge: number, balance: number) {
        super(accountNumber, accountHolderName, accountHolderAge, balance);
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;        
            let bonus = Math.floor(amount / 1000);
            this.balance += bonus;
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && this.balance - amount >= 0) {
            this.balance -= amount;
        } else {
            console.log("Withdrawal amount exceeds balance or invalid amount.");
        }
    }
}


let childAcc = new ChildAccount(123456, "XYZ", 10, 5000);
console.log("Initial balance:", childAcc.balance);

childAcc.deposit(3000);
console.log("Balance after deposit:", childAcc.balance);

childAcc.withdraw(2000);
console.log("Balance after withdrawal:", childAcc.balance);

interface Account {
    accountNumber: number;
    accountHolderName: string;
    balance: number;
    deposit(amount: number): void;
    withdrawal(amount: number): void;
}

abstract class AbstractAccount implements Account {
    constructor(
        public accountNumber: number,
        public accountHolderName: string,
        public balance: number
    ) {}

    abstract deposit(amount: number): void;
    abstract withdrawal(amount: number): void;
}

class CurrentAccount extends AbstractAccount {
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdrawal(amount: number): void {
        if (amount > 0) {
            if (this.balance - amount >= 0) {
                this.balance -= amount;
            } else {
                console.log("Insufficient funds.");
            }
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
}

class SavingsAccount extends AbstractAccount {
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdrawal(amount: number): void {
        if (amount > 0) {
            if (this.balance - amount >= 0) {
                this.balance -= amount;
            } else {
                console.log("Insufficient funds.");
            }
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
}


let currentAcc: Account = new CurrentAccount(123456, "John Doe", 5000);
currentAcc.deposit(2000);
currentAcc.withdrawal(1000);
console.log("Current Account Balance:", currentAcc.balance);

let savingsAcc: Account = new SavingsAccount(789012, "Jane Smith", 10000);
savingsAcc.deposit(3000);
savingsAcc.withdrawal(5000);
console.log("Savings Account Balance:", savingsAcc.balance);

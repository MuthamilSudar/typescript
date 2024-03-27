interface Account {
    accountNumber: number;
    accountHolderName: string;
    balance: number;
    deposit(amount: number): void;
    withdrawal(amount: number): void;
}

class CurrentAccount implements Account {
    constructor(
        public accountNumber: number,
        public accountHolderName: string,
        public balance: number
    ) {}

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

class SavingsAccount implements Account {
    constructor(
        public accountNumber: number,
        public accountHolderName: string,
        public balance: number
    ) {}

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

let savingsAcc: Account = new SavingsAccount(789012, "Jane Smith", 1000);
savingsAcc.deposit(3000);
savingsAcc.withdrawal(15000);
console.log("Savings Account Balance:", savingsAcc.balance);

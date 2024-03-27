
const SI = (principal: number, rate: number = 0.05, ...periods: number[]): number => {
    let totalPeriods = 0;
    for (const period of periods) {
        totalPeriods += period;
    }
    const interest = principal * rate * totalPeriods;
    return interest;
};


const principalAmount = 1000;
const interestRate = 0.1;
const timePeriods = [1, 2, 3]; 

const x = SI(principalAmount, interestRate, ...timePeriods);
console.log("Simple Interest:", x);
const y = SI(500, ...timePeriods);
console.log("Simple Interest:", y);

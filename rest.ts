
const sum = (...numbers: number[]): number => {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
};


console.log(sum(1, 2, 3));  
console.log(sum(5, 10, 15, 20));  
console.log(sum(2));  
console.log(sum());  











// The purpose of REST (Representational State Transfer) parameters in JavaScript and TypeScript is to allow functions 
// to accept an indefinite number of arguments as an array. 
// This enables developers to write functions that can handle varying numbers of parameters 
// without explicitly specifying them in the function signature.

const maxNumber = (...numbers: number[]): number => {
    if (numbers.length === 0) return undefined;
    return Math.max(...numbers);
};

console.log(maxNumber(10, 20, 5, 30));  
console.log(maxNumber(1, 2, 3));        
console.log(maxNumber());               

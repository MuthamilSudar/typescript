const concatenate = (...strings: string[]): string => {
    return strings.join(' ');
};

console.log(concatenate('Hello', 'World'));               
console.log(concatenate('JavaScript', 'is', 'awesome'));  
console.log(concatenate());                               

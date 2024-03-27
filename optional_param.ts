
function greet(name?: string): void {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log(`Hello, anonymous!`);
    }
}

greet();            
greet("John");      

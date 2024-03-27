function addition(x: number, y: number) : number {
    return x+y
}

function subtraction(x: number, y: number) : number {
    return x-y
}

function multiplication(x: number, y: number) : number {
    return x*y
}

function division(x: number, y: number) : number {
    return x/y
}

var number1 : number = 5
var number2 : number = 6

console.log("Add : " + addition(number1, number2))
console.log("Subtract: " + subtraction(number1, number2))
console.log("Multiply: " + multiplication(number1, number2))
console.log("Divide: ", + division(number1, number2))
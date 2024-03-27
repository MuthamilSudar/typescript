interface NumList {
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];


interface IStringList {
    [index:string]:string
}

let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

console.log(strArr["TS"])
console.log(numArr[1])
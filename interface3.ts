interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    empCode: number;
}

let empObj:IEmployee = {
    empCode:1,
    name:"Bill",
    gender:"Male"
}
console.log("Code:  "+empObj.empCode) 
console.log("Name  "+empObj.name)
console.log("Geeder: " +empObj.gender)
/* 
    Generics
    Classes
*/

//I will put <T> after class name and in type with value
// and i can add defuld type as argument
class User36 <T = string > {
    constructor(public value: T){}
    show(msg: string): void{
        //this value come win i init object from this class
        console.log(`${msg} - ${this.value}`);
    }
    }


let userOne36 = new User36("EngJaber");
console.log(userOne36.value)
console.log(userOne36.show("Wlecomn this my Gerice class "))


let userOne362 = new User36 <number | string> (100);
console.log(userOne362.value)
console.log(userOne362.show("Wlecomn this my Gerice class "))
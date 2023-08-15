/* 
    Class 
    Abstract Classess and Menbers   
        we cannot create an instance of an ABstract Class
*/

abstract class Food {
    constructor(public title: string){}
    getCookingTime(): void{};
}

class Pizza extends Food {
    constructor(title: string, public price: number){
        super (title); // call the parent's constructor.
    }
    override getCookingTime(): void {
        console.log('Pizzas are ready in 5 minutes');
    }
}

class Burger extends Food {
    constructor(title: string, public price: number){
        super (title); // call the parent's constructor.
    }
    override getCookingTime(): void {
        console.log("Burgers are ready in 10 min");
    }
}

let pizzaOne = new Pizza("Awesome Pisaa", 100);

console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime()

"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
    getCookingTime() { }
    ;
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log('Pizzas are ready in 5 minutes');
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log("Burgers are ready in 10 min");
    }
}
let pizzaOne = new Pizza("Awesome Pisaa", 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
//# sourceMappingURL=section32.js.map
"use strict";
class Game3 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
class RPG extends Game3 {
    constructor(title, price, rate) {
        super(title, price);
        this.rate = rate;
    }
    getLocation() {
        return "Discount";
    }
    getDiscount() {
        return "Location";
    }
}
class Action extends Game3 {
    constructor(title, price, rate, company) {
        super(title, price);
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return "Discount";
    }
    getDiscount() {
        return "Location";
    }
}
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title);
console.log(gameOne.price);
console.log(gameOne.rate);
console.log(gameOne.getDiscount());
console.log(gameOne.getLocation());
console.log(gameTwo.title);
console.log(gameTwo.price);
console.log(gameTwo.rate);
console.log(gameTwo.company);
console.log(gameTwo.getDiscount());
console.log(gameTwo.getLocation());
console.log("////////////////////////////////////////////////////////");
function showTypes(name, score, how) {
    return `the name is ${name} th score is ${score} the how is ${how}`;
}
console.log(showTypes());
console.log(showTypes("String"));
console.log(showTypes("String", 100));
console.log(showTypes("String", 100, true));
console.log("////////////////////////////////////////////////////////");
class Game31 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(vale) {
        console.log(`The Discount Is ${vale}`);
    }
}
let gameOne12 = new Game31("Ys", 100);
let gameTwo13 = new Game31(2064, 100);
console.log(gameOne12.title);
console.log(gameOne12.price);
gameOne12.getDiscount("50");
console.log(gameTwo13.title);
console.log(gameTwo13.price);
gameTwo13.getDiscount(80);
console.log("Iam fincsh iand so hape");
//# sourceMappingURL=asument32.js.map
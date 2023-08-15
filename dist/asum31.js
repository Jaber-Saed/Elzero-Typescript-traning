"use strict";
let user21 = {
    id: 100,
    username: "Elzero",
    state: true,
    getNmae1() {
        return this.username;
    }
};
user21.id = 200;
user21.id = "200";
user21.state = false;
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    }
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
};
class Player {
    constructor(userNameas, userCuntry, score, states) {
        this.userNameas = userNameas;
        this.userCuntry = userCuntry;
        this.score = score;
        this.states = states;
    }
    details() {
        console.log(`User nam ${this.userNameas} and the cuntry for the player is ${this.userCuntry} and the score for the player is ${this.score} and the states is ${this.states}`);
    }
}
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details());
console.log(player2.details());
console.log(player3.details());
console.log(player4.details());
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
let tester1 = new Shorten(100, "Jaber", "Developer");
console.log(tester1.id);
console.log(tester1.username);
//# sourceMappingURL=asum31.js.map
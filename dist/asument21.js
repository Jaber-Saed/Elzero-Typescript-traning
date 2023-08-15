"use strict";
let myData;
myData = 1000;
myData = +true;
let myInfo;
myInfo = 1000;
myInfo = true;
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
function yesOrNo(val) {
    return val > 10;
}
console.log(yesOrNo("100"));
console.log(yesOrNo(30));
console.log(yesOrNo(8));
function isHeOld(age) {
    return age > 40;
}
console.log(isHeOld("100"));
console.log(isHeOld(45));
console.log(isHeOld(30));
const post = {
    id: 100,
    title: "Title",
    state: false,
};
console.log(post.id);
console.log(post.title);
console.log(post.state);
var Game;
(function (Game) {
    Game["Easy"] = "E";
    Game["Medium"] = "M";
    Game["Hard"] = "H";
    Game["Insane"] = "I";
})(Game || (Game = {}));
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
console.log(Game.Insane);
const user = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
};
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);
//# sourceMappingURL=asument21.js.map
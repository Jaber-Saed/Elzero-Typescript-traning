"use strict";
let userl = {
    id: 100,
    username: "Jaber",
    country: "Jordan",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcom: () => {
        return `Welcom ${user.username}`;
    },
    getDouble(a) {
        return a * 2;
    },
};
console.log(userl);
function getData(data) {
    console.log(`ID Is ${data.id}`);
    console.log(`User Name Is ${data.username}`);
    console.log(`Country Is ${data.country}`);
}
console.log(userl.id);
console.log(userl.sayHello());
console.log(userl.sayWelcom());
console.log(userl.getDouble(11));
//# sourceMappingURL=section22.js.map
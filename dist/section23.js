"use strict";
class UserC {
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
    constructor(_userName, salary, address) {
        this._userName = _userName;
        this.salary = salary;
        this.address = address;
        this._userName = _userName;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return `Hello ${this._userName} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this._userName} Your Salary Is ${this.salary}`;
    }
}
let userOne = new UserC("Jaber", 6000, "Safot");
console.log(userOne.userName);
user.username = "Yaqob Gamer den Debaza";
console.log(userOne.userName);
console.log(userOne.msg());
console.log(userOne.sayMsg());
//# sourceMappingURL=section23.js.map
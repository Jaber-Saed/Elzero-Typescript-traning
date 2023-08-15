"use strict";
class UserB {
    constructor(username, salary) {
        this.userName = username;
        this.s = salary;
        this.msg = function () {
            return `Hello ${this.userName} Your Salary Is ${this.s}`;
        };
    }
    sayMsg() {
        return `Hello ${this.userName} Your Salary Is ${this.s}`;
    }
}
let userOneB = new UserC("Jaber", 6000);
//# sourceMappingURL=section28.js.map
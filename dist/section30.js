"use strict";
class User {
    static get created() {
        return User._created;
    }
    static set created(value) {
        User._created = value;
    }
    constructor(usernam) {
        this.usernam = usernam;
        User.created++;
    }
}
User._created = 0;
let u1 = new User("Jaber");
let u2 = new User("Saed");
let u3 = new User("Salem");
console.log(User.created);
User.created;
//# sourceMappingURL=section30.js.map
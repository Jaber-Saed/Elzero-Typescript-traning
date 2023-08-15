/* 
    class
        static Member 
            don't use "name , length , call"
*/

class User {
    private static _created: number = 0;
    public static get created(): number {
        return User._created;
    }
    public static set created(value: number) {
        User._created = value;
    }
    constructor(public usernam: string){
        User.created++;
    }
}

let u1 = new User ("Jaber")
let u2 = new User ("Saed")
let u3 = new User ("Salem")
console.log(User.created)

User.created;
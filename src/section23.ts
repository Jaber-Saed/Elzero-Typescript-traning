// type Annotatinos with Class
/* Get and Set Accessors*/

class UserC {
    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }
    msg: () => string;
    constructor(private _userName: string, protected salary: number,readonly address: string){
        this._userName = _userName; // name is a property of the object
        this.salary = salary;
        this.address =address;
        //this property
        this.msg = function (){
            return `Hello ${this._userName} Your Salary Is ${this.salary}`
        };
    }
    //this method
    sayMsg(){
        return `Hello ${this._userName} Your Salary Is ${this.salary}`
}
 
}

let userOne = new UserC ("Jaber", 6000,"Safot")

console.log(userOne.userName)
user.username = "Yaqob Gamer den Debaza"
console.log(userOne.userName)
//console.log(userOne.salary)
console.log(userOne.msg())
console.log(userOne.sayMsg())

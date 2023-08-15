// type Annotatinos with Class

class UserB {
    private userName: string;
    s: number;
    msg: () => string;
    
    constructor(username: string, salary: number){
        this.userName = username; // name is a property of the object
        this.s = salary;
        //this property
        this.msg = function (){
            return `Hello ${this.userName} Your Salary Is ${this.s}`
        };
    }
    //this method
    sayMsg(){
        return `Hello ${this.userName} Your Salary Is ${this.s}`
}
}

let userOneB = new UserC ("Jaber", 6000)


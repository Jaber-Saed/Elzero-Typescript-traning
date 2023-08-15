////////1

// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  country?: string;
  state: boolean;
  getNmae1(): string;
}

// Do Not Edit The Code Below
let user21: Member = { // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getNmae1() { // 'getName' does not exist in type 'Member'
    return this.username;
  }
}

user21.id = 200;
user21.id = "200"; // Type 'string' is not assignable to type 'number'
user21.state = false; // Cannot assign to 'state' because it is a read-only property



////////2
// Create Interface Here

// Do Not Edit The Code Below

interface Client {
    id: number;
    username: string;
    active: boolean;
    discount: number;
    getPrice(price: number): number;
}

let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);



////////3


// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird  {
  canFly: boolean;
}

interface Superman extends Man ,Bird{
    bodyType: string;
    origin: string;
}

let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton"
}




////////4

// Create Class Here
class Player {
    constructor(public userNameas: string,public userCuntry: string,public score: string | number,public states ?: boolean){
    }
        details () {
        console.log(`User nam ${this.userNameas} and the cuntry for the player is ${this.userCuntry} and the score for the player is ${this.score} and the states is ${this.states}`);
    }
}
// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77



////////5
class Shorten {

  constructor (public id: number,public  username: string,public  title: string) {
  }
}

let tester1 = new Shorten(100, "Jaber", "Developer");

console.log(tester1.id);
console.log(tester1.username);


/*
//////6
class Show {
  public get _title(): string {
      return this._title;
  }
  public //1
      set _title(value: string) {
          this._title = value;
  }
  constructor (private _title: string) {}
}


let tester = new Show("Elzero");

console.log(tester._title); // Property 'title' does not exist on type 'Show'
tester._title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester._title); // Property 'title' does not exist on type 'Show'



//////////7
interface Play31 {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

/*class Player2 implements Play31 {
  constructor(public id: number, public title: string, public level: number) {}
  logIn21() {
    console.log('Logged In');
  }

  logOut21(msg: string): void {
    alert(`Logged Out, ${msg}`);
  }
}
let player21 = new Player2(100, "Elzero", 95);

console.log(player21.id); // Output: 100
console.log(player21.title); // Output: "Elzero"
console.log(player21.level); // Output: 95
//player1.logIn21(); // Output: Logged In
//player1.logOut21("Good Bye"); // Output: Logged Out, Good Bye
*/

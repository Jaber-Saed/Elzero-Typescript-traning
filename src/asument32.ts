// Do Not Edit
type numandstring = number | string;

abstract class Game3 {
  constructor(public title: string, public price: numandstring) {}
  abstract getLocation() : string;
  abstract getDiscount() : string;
}

// Start Edit And Fix
class RPG extends Game3 {
  constructor(title: string,  price: numandstring, public rate: number) {
    super(title,price);
  }
    getLocation(): string {
      return "Discount";
  }
     getDiscount(): string {
        return "Location";
    }
}

class Action extends Game3 {
  constructor(title: string,  price: numandstring, public rate: number, public company: string) {
    super(title,price);
  }
      getLocation(): string {
      return "Discount";
  }
     getDiscount(): string {
        return "Location";
    }
}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"



console.log("////////////////////////////////////////////////////////")

///Optional Generic Type
// Write Function Code Here
function showTypes<T,U = "Nothing",V = "Nothing" > (name?: T, score?: U, how?: V ):string {
    return `the name is ${name} th score is ${score} the how is ${how}`
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true


console.log("////////////////////////////////////////////////////////")

// Write Class Code Here
class Game31 <T>{
constructor(public title: T ,public price: number){}
getDiscount(vale: T){
    console.log(`The Discount Is ${vale}`)
}
}
// Do Not Edit Here
let gameOne12 = new Game31<string>("Ys", 100);
let gameTwo13 = new Game31<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne12.title); // "Ys"
console.log(gameOne12.price); // 100
gameOne12.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo13.title); // 2064
console.log(gameTwo13.price); // 100
gameTwo13.getDiscount(80); // "The Discount Is 80"

console.log("Iam fincsh iand so hape")
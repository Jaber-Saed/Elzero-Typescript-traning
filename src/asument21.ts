////////1
// Write Your Code Here
type a = number | boolean ;
// Do Not Edit Here
let myData: a;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here



////////2
// Write Your Code Here
type mx = number | boolean
// Do Not Edit Here
let myInfo: mx;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here



////////3
// Write Your Code Here
 type Info = {
    theName: string,
    theAge: number,
}

type Full = Info & {
    country: string,
}
// Do Not Edit Here
function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
  console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));



////////4
function yesOrNo(val: any) : boolean {
  return val > 10;
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False


////////5
function isHeOld(age: any) : boolean {
  return age > 40;
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"



////////6

// Create Destructuring Here

const post : {
    id:number,
    title:string
    state:boolean,
} = {
    id: 100,
    title: "Title",
    state: false,
}




// Do Not Edit Here
console.log(post.id); // 100
console.log(post.title); // "Title"
console.log(post.state); // true



////////7
// Create Enums + Function Here
enum Game {
    Easy = 'E',
    Medium = 'M' ,
    Hard = 'H',
    Insane = 'I',
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20



////////8
const user: {
   username: string,
  age: number | string,
  website?: string,
  skills: {
    frontEnd: string[],
    backEnd: any[],
  }
} = {
  username: "Elzero",
  age: 40,
  website: "Elzero.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"]
  }
}

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);

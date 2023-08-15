/* Type Annotations with Object */

let myObject:{
    readonly username: string,
    id: number,
    hire?: boolean,
    skills:{
        one: string,
        two: string,
        three: string,
    }
} = {
    username: "Jaber",
    id: 100,
    skills:{
        one: "HTML",
        two: "CSS",
        three: "JavaScript"}
};

//myObject.username = "Software";
myObject.id = 101;
myObject.hire = false;

console.log(myObject)
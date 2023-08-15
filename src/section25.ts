/* 
    Interface 
    Extending Interfaces
*/

interface UserT {
    id: number,
    username: string,
    country: string,
}

interface Moderator{
    role: string | number,
}

interface Admain extends Moderator , UserT {
    protect: boolean,
}

let usert: Admain = {
    id: 100,
    username: "jaber",
    country: "Jordan",
    role: 3,
    protect:true
}

console.log(usert.id)
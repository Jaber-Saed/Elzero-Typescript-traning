"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemType: 'Book', title: 'atomic hapet', isbn: 100 });
itemOne.add({ itemType: 'Book', title: 'Dont cary', isbn: 101 });
console.log(itemOne.data);
let itemTwo = new Collection();
itemTwo.add({ itemType: 'Scare', title: 'valorent', style: "vimber", price: 75 });
itemTwo.add({ itemType: 'football', title: 'fifa', style: 'spoort', price: 50, });
console.log(itemTwo);
//# sourceMappingURL=sectino37.js.map
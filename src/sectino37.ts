/* 
    Generics 
    Classes And Interfaces
*/


interface manItem {
    itemType: string;
    title: string;
}

interface Book extends manItem{
    isbn: number;
}

interface Game1 extends manItem{
    style: string;
    price: number;
}

class Collection <T> {
    public data: T[] = [];
    //This is method
    add(item: T): void {
        this.data.push(item)
    }
}

let itemOne = new Collection<Book>();
itemOne.add({itemType: 'Book',  title: 'atomic hapet', isbn: 100})
itemOne.add({itemType: 'Book',  title: 'Dont cary', isbn: 101})
console.log(itemOne.data)

let itemTwo = new Collection<Game1>();
itemTwo.add({itemType: 'Scare',  title: 'valorent',style: "vimber",price: 75 });
itemTwo.add({itemType: 'football', title: 'fifa' , style: 'spoort',price:50,})
console.log(itemTwo)
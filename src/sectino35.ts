/* 
Generics functiuon
Arrow functino
*/

function  returnType <T> (vali: T ): T {
    return vali
}

console.log(returnType<number>(100));
console.log(returnType<string>("Jaber"));

const returnTypeArrowSyntax = <T> (val : T): T => {return val};

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>("Jaber"));


function  testType <T> (vali: T ): string {
    return `The Value Is ${vali} And Type Is ${typeof vali}`
}
console.log(testType<number>(100));
console.log(testType<string>("Jaber"));


function  multipleType <T, S> (valueOne: T, valueTow: S ): string {
    return `The First Value Is ${valueOne} And Second Value Is ${ valueTow}`
}
console.log(multipleType<number, boolean>(100 , true));
console.log(multipleType<string, number[]>("Jaber", [1, 2, 3, 4]));

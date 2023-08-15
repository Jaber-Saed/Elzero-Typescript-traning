/* 
Generics
to help my to write A reusable code
*/

function returnNumber(val: number): number {
return val;
}

function returnString(val: string): string {
return val;
}

function returnBoolean(val: boolean): boolean {
    return val;
}


console.log(returnBoolean(true));
console.log(returnNumber(100));
console.log(returnString("true"));

// you can use 'T' symbolic substitute for GebericType
function returnType<T> (val: T): T{
    return val;
}
//her i will to sent the type as parimater win I use the function
console.log(returnType<boolean>(true));
console.log(returnType<number>(100));
console.log(returnType<string>("true"));
console.log(returnType<string[]>(['A', 'B', 'D', 'C',]));
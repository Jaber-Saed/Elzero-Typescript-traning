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

function returnType<GebericType> (val: GebericType): GebericType{
    return val;
}
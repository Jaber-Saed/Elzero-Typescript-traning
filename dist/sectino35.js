"use strict";
function returnType(vali) {
    return vali;
}
console.log(returnType(100));
console.log(returnType("Jaber"));
const returnTypeArrowSyntax = (val) => { return val; };
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("Jaber"));
function testType(vali) {
    return `The Value Is ${vali} And Type Is ${typeof vali}`;
}
console.log(testType(100));
console.log(testType("Jaber"));
function multipleType(valueOne, valueTow) {
    return `The First Value Is ${valueOne} And Second Value Is ${valueTow}`;
}
console.log(multipleType(100, true));
console.log(multipleType("Jaber", [1, 2, 3, 4]));
//# sourceMappingURL=sectino35.js.map
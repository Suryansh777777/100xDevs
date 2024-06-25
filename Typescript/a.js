"use strict";
// function sum( a: number, b: number ): number {
//     return a + b;
// }
// const value = sum( 1, 2 );
// console.log( value );
function isLegal(user) {
    if (user.age < 18) {
        return false;
    }
    return true;
}
isLegal({ name: 'John', age: 20 }); // true

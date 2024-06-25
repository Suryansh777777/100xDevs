// function sum( a: number, b: number ): number {
//     return a + b;
// }
// const value = sum( 1, 2 );
// console.log( value );

// When we pass a function as a parameter, we can use the type of the function as a parameter.
// function runAfter1s( callback: () => void ) {
//     setTimeout( callback, 1000 );
// }

// runAfter1s( () => {
//     console.log( '1s passed' );
// } );

interface User {

    name: string;
    age: number;
}   
function isLegal(user: User) {
    if(user.age < 18) {
        return false;
    }
    return true;
   
}

isLegal({name: 'John', age: 20}); // true
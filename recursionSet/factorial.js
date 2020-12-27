/* Write a function factorial which accepts a number and returns the factorial of that number.
A factorial is the product of an integer and all the integers below it; 
e.g.,factorial fout ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24. 
Factorial zero ( 0! ) is always 1. */

const factorial = x => {
    if ( x < 0 ) return 0;
    if ( x <= 1 ) return 1;
    return x * factorial( x - 1);
}
/* TEST CASES */
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(4)); //24

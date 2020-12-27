/* Write a recursive function called fib which accepts a number and returns
the nth number in the Fibonacci sequence. Recall the Fibonacci sequence is
the seq of the whole numbers which starts with 1 and 1, and where every number
thereafter is equal to the sum of previous two numbers. */

const fib = n => {
    if ( n <= 2 ) return 1;
    return fib( n - 1 ) + fib( n - 2 );
}

/* TEST CASES */
console.log(fib(4)); //3
console.log(fib(10)); //55
console.log(fib(28)); //317811
console.log(fib(35)); // 9227465
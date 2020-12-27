/* Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow().
- do not worry about negative bases and exponents - */

/* Math pow: 
The Math.pow() function returns the base to the exponent power, 
that is, baseexponent. */

//Regular solution: 

const pwr = (b, exp) => Math.pow(b, exp);

//Recursion solution:

const power = (b, exp) => {
    if(exp === 0) return 1;
    return b * power(b, exp - 1);
};

/* TEST CASES: */
console.log(power(2,0)) // 1
console.log(power(2,2)) // 4

/* Write a function that prints numbers from 1 to 100
if the number is divisible by 3 print fizz
if the number is divisible by 5 print buzz
both conditionals to be true must print fizzbuzz */

const fizzBuzz = () => {
    for(let i = 1; i <= 100; i++) {
        let fizz = i % 3 === 0; buzz = i % 5 === 0;

        console.log(fizz ? buzz ? `FizzBuzz`
                    : `Fizz`
                    : buzz ? `Buzz`
                    : i);
    }
}

fizzBuzz()
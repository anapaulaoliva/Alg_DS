/* Technical Interview Exercise 
    Write a function that receives a string 
    Returns the string encrypted given this pattern: 
    input => 'fffhhaaaffijj'   
    expected output => 'f3h2a3f2i1j2' */
/* Pseudocode:
    - Iteration of string.
    - Identify actual position index. 
    - Identify adyacent position index.
    - Storage of the actual index with a counter
    - Conditional comparing actual and adyacent position to modify counter. */

/* First approach with an array */

const encryptedString = string => {
    let counter = 0; result = [];
    
    for( let i = 0; i < string.length; i++ ) {
        let actual = string[i];
        let adyacent =  string[i + 1];
        counter++;

        if(actual !== adyacent) {
            result.push(actual);
            result.push(counter);
            counter = 0;
        }
    }
    return result.join(''); 
}

/* Test Cases */

console.log(encryptedString('fffh'));
//expected output: f3h1
console.log(encryptedString('fffhhaaaffijj'));
//expected output: f3h2a3f2i1j2
console.log(encryptedString('abchhf'));
//expected output: a1b1c1h2f1

/* Second approach without an array, evaluating the "i-1" position of the string, and using ternary operators */

const encryptedString = string => {
    let counter = 0; result = ''; adyacent = '';

    string.split('').forEach(actual => {

        //assignment of adyacent character checking the actual index 
        adyacent = adyacent === '' ? actual : adyacent;

        //storage of the conditional within a variable 
        let condition = (actual !== adyacent);

        //splitting the assignment of values given the condition above
        result = condition ? (result + adyacent + counter) : result;
        counter = condition ? 0 : counter;
        adyacent = condition ? actual : adyacent;
        
        counter ++;
    });

    return result;
}

/* Test Cases */;

console.log(encryptedString('jjjhhgiiikll'));
//expected output: k3h2g1i3k1l2
console.log(encryptedString('uuujjt'));
//expected output: u3j2t1
console.log(encryptedString('aaa'));
//expected output: a3
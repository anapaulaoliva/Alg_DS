/* Frequency Counter / Multiple Pointers - areThereDuplicates 
Implement a function called, areThereDuplicates which accepts a variable 
number of arguments, and checks whether there are any duplicates among 
the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern. */

/* Frequency Counter:
Pattern that uses a Set or an Object to construct a map,
and then check if the values are existing within it. */ 

const areThereDuplicates = () => {
    let collection = {};

    for( let val in arguments ){
        collection[arguments[val]] =  collection[arguments[val]] ?  collection[arguments[val]] + 1 : 1;
    }

    for( let key in collection ){
      if(collection[key] > 1) return true;
    }

    return false;
}

/* TEST CASES */
console.log(areThereDuplicates(1, 2, 3))//false
console.log(areThereDuplicates('a', 'b', 'c', 'a'))//true

/* Multiple Pointers Pattern:
Consists of working with positions of an array that work as pointers,
and move backwards or towards given a condition */

const areThereDuplicates = (...args) => {
    //array must be sorted
    args.sort(( a, b ) => a > b);
    //pointers starting position
    let start = 0; adyacent = 1;
    //making sure pointer goes only evaluates untill the limit of the array 
    while( adyacent < args.length ) {
        if( args[start] === args[adyacent] ) return true;
        
        start++;
        adyacent++;
    }

    return false;
}

/* TEST CASES */
console.log(areThereDuplicates(1,2,2))//true
console.log(areThereDuplicates('a','a','z'))//true

/* Set built-in methods applied:
The Set constructor lets you create Set objects that store unique values of any type.
The size accessor property returns the number of (unique) elements in a Set object. */

const areThereDuplicates = () => new Set(arguments).size !== arguments.length;

/* TEST CASES */
console.log(areThereDuplicates(1, 2, 3))//false
console.log(areThereDuplicates('a','b','c','a'))//true

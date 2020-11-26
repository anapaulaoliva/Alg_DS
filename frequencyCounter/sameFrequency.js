/* Frequency Counter - sameFrequency 
Write a function called sameFrequency. Given two positive intergers, 
find out if the two numbers have the same frequency.

Your solution MUST have the following complexities:
Time: O(N) */

const sameFrequency = (num1, num2) => {
    //parsing numbers in order to loop through digits
    let [ s1, s2 ] = [ num1.toString(), num2.toString() ];
    //shortcut validation 
    if( s1.length !== s2.length ) return false;
    
    let [ map_s1, map_s2 ] = [ {}, {} ];
    //constructing map of first number
    for( let i = 0; i < s1.length; i++ ) {
        let char = s1[i];
        map_s1[char] = map_s1[char] ? map_s1[char] + 1 : 1;
    }
    //constructing map of second number
    for( let j = 0; j < s2.length; j++ ) {
        let char = s2[j];
        map_s2[char] = map_s2[char] ? map_s2[char] + 1 : 1;
    }
    
    for( let key in map_s1 ) {
        //validates if keys in both maps exist
        if( map_s1[key] !== map_s2[key] ) return false;
    }
    return true;
}

/* TEST CASES */

console.log(sameFrequency(144,441))//true
console.log(sameFrequency(182,284))//false
console.log(sameFrequency(358957186,586719385))//true
console.log(sameFrequency(22,2))//false

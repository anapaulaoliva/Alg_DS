/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence
of the characters in the second string.
In other words, the function should check whether the characters in the first string appear 
somewhere in the second string, without their order changing. 
*/

/* PSEUDOCODE: 
- Iterate in each character of substring and string
- Declaring pointers, one for substring, and other for the string
- Shortcut to check if substring is empty returns true
- Conditional to stop looping untill the limit of the string's length - 1
- If both pointers contain same character, substring index counter adds 1
- If the counter of the substring has the same number of the substring's length, then returns true
- Else, withing the loop, adds + 1 to the string index [j] to keep checking characters in case it matches with the current substring character
- Getting out of the loop without returns false */


const isSubsequence = (sub, str) => { 
    let i = 0, j = 0; 
    if (!sub) return true; 
    while( j < str.length ) {
        i = str[i] === sub[j] ? i + 1 : i;
        /*TODO:doubt about transforming this conditional or keep it that way*/ 
        if( i === sub.length ) return true; 
        j++; 
    }  
    return false;
}

/* TEST CASES */

console.log(isSubsequence('hello','hello world')) //true
console.log(isSubsequence('sing','sting')) //true
console.log(isSubsequence('sign','sting')) //false
console.log(isSubsequence('abc','abracadabra')) //true
console.log(isSubsequence('abc','acb')) //false
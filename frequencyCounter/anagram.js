/* Given two strings, write a function to determine
if the second string is an anagram of the first.
An anagram is a word, phrase or name formed by 
rearranging the letters of another,
such as cinema, formed from iceman.

Assuming input is just single string with lowecase, no punctuation, spaces or periods*/

const validAnagram = (word, anagram) => {
    //first validation comparing lengths
    if(word.length !== anagram.length) {
        return false;
    }
    //setting object where is going to storage how many characters the str1 has
    let wordMap = {}, isAnagram = true;
    //construct our map
    for(let char of word) {
        //if the key is already set in object, will add 1, else just set it to 1.
        wordMap[char] = wordMap[char] ? wordMap[char] += 1 : 1; 
    }
    //looping through second string
    for(let char of anagram) {
        let keyNotFound = (!wordMap[char]);
        //if character is not part of keys of the first string return false, else rest the value
        isAnagram = keyNotFound ? false : isAnagram;
        wordMap[char] = keyNotFound ? wordMap[char] : wordMap[char] -= 1;
    }
    return isAnagram;
};

/* Test Cases */
console.log(validAnagram('','')) //true
console.log(validAnagram('aaz','zza')) //false
console.log(validAnagram('anagram','nagaram')) //true
console.log(validAnagram('rat','car')) //false
console.log(validAnagram('awesome','awesom')) //false
console.log(validAnagram('qwerty','qeywrt')) //true
console.log(validAnagram('texttwisttime','timetwisttext')) //true

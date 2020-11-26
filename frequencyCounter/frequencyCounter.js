/* Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array.
Frequency of values must be the same. */

//O(N^2) nested loops (.indexOf makes o(n) time&space for searching) solution

const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr[i] ** 2);
        if(correctIndex === -1) {
            return false;
        }
        arr.splice(correctIndex,1);
    }
    return true;
}

//O(N) with objects

const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let [ frequencyCounter1, frequencyCounter2 ] = [ {}, {} ];

    for(let val of arr1) {
        //add one to the fc on initialize it to 1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        //add one to the fc on initialize it to 1
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    //iterates through object of arr1
    for(let key in frequencyCounter1){
        //checks if squared item is into arr2 object
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        //checks if the number of times that squared item exists is accordingly to the number of times it actually occurs
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

/* Test Cases */

console.log(same([1,2,3], [1,4,9]))
//expected output: true
console.log(same([1,2,3], [1,9]))
//expected output: false
console.log(same([1,2,1], [4,4,1]))
//expected output: false
console.log(same([1,2,2,3,5], [1,4,4,9,11]))
//expected output: false
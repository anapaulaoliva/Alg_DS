/* Implement a function called countUniqueValues,
which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but will always be sorted */

const countUniqueValues = arr => {
    //first conditional for empty arrays
    if(arr.length === 0) return 0;
    //declaring first pointer index 0
    let i = 0;
    //loop to iterate through array starting at index 1 (adyacent)
    for(let j = 1; j < arr.length; j++) {
        //if current value and adyacent are not equal
        if(arr[i] !== arr[j]) {
            //move i right forward
            i++;
            //save the value of j to that current index
            arr[i] = arr[j];
        }
        //the number of unique values are collected from index 0 to where i is, so to obtain counter we return the index of i + 1;
        return i + 1;
    }
}

/* Test Cases */
console.log(countUniqueValues([1,1,1,1,1,2])) //2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(countUniqueValues([])) //0
console.log(countUniqueValues([-2,-1,-1,0,1])) //4

console.log('hello');
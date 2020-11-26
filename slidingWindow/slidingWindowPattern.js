/* Sliding Window Pattern example.
Write a function called maxSubarraySum wich accepts an array of intergers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.*/

const maxSubarraySum = (arr, n) => {
    if ( arr.length < n ) return null;
    let max_sum = temp_sum = 0;

    //first loop makes the sum of the first elements of the arrar according to number (n) to set max_sum (makes the ''window'')
    for( let i = 0; i < n; i++ ) {
        max_sum = max_sum + arr[i];
    }
    
    temp_sum = max_sum;

    //second loop through the rest of the elements, substracts the first element on the window and adds adyacent one. 
        //if the new result of addition is greater than the storaged on max_sum, will be replaced.
    for( let i = n; i < arr.length; i++ ) {
        temp_sum = temp_sum - arr[i - n] + arr[i];
        max_sum = Math.max(max_sum, temp_sum);
    }

    return max_sum;
}

/* Test Cases */

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)); //10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)); //17
console.log(maxSubarraySum([4,2,1,6],1)); //6
console.log(maxSubarraySum([4,2,1,6,2],4)); //13
console.log(maxSubarraySum([],4)); //null


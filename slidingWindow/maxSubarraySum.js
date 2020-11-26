/* Given an array of intergers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray 
with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array.

Constraits: Time O(N) Space: O(1) */

/* PSEUDOCODE: 
1. check for null output.
2. declaring variables of temporary sum and max sum
3. first loop to create the window and storing it as the max value
4. setting same value for temporary sum and max sum
5. second loop to move through the elements of the array with the window already set
6. temporary sum removes the first added element and adds the current element in the loop iteration
7. checks with the built in method which is going to be the maximum quantity
8. loop is over and returns the maximum stored sum */

const maxSubarraySum = (arr, num) => {
    if( arr.length < num ) return null;
    let [ temp_sum, max_sum ] = [ 0, 0 ];
    for( let i = 0; i < num; i++ ) {
        max_sum += arr[i];
    }
        temp_sum = max_sum;
    for( let i = num; i < arr.length; i++ ) { 
        temp_sum = temp_sum - arr[i - num] + arr[i]; 
        max_sum = Math.max(max_sum, temp_sum);  
    }
    return max_sum; 
}

/* TEST CASES */
console.log(maxSubarraySum([100,200,300,400],2))//700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4))//39
console.log(maxSubarraySum([-3,4,0,-2,6,-1],2))//5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))//5
console.log(maxSubarraySum([2,3],3))//null
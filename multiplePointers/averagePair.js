/* Multiple Pointers - averagePair Exercise:
Write a function called averagePair. Given a sorted array of integers,
and a target average, determine if there is a pair of values in the array
where the average of the pair equals the target average. */

/* PSEUDOCODE: 
1. Declaring conditional if arr is empty, return false.
2. Storing values first and last position indexes.
3. Conditional while left is less than right loop
4. Declaring variable to get the average 
5. if avrg equals to target return true
6. if avrg is less than target, then left moves one position
7. else, right moves one position backwards
8. return false outside while loop.
*/

const averagePair = (arr, target) => {
    if( arr.length === 0 ) return false;
    let left = 0, right = arr.length - 1;
    while ( left < right ){
        let average = (arr[left] + arr[right]) / 2;

        if( average === target ) return true;
        
        left = average < target ? + 1 : left;
        right = average > target ? - 1 : right;
    }
    return false;
}

/* TEST CASES */
console.log(averagePair([1,2,3],2.5))//true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8))//true
console.log(averagePair([-1,0,3,4,5,6],4.1))//false
console.log(averagePair([],4))//false
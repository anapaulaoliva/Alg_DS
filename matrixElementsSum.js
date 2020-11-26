//https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr
/* Given a bidimensional array, return a sum of the elements
    that are above 0 elements 
    Example: matrix = [[0, 1, 1, 2], 
                       [0, 5, 0, 0], 
                       [2, 0, 3, 3]]
            expected output = 9 */

const matrixElementsSum = matrix => {

    let counter = 0;
        let i = 0;
        let len = matrix[i].length;

        //matrix transposition nested loops
        for(; i < len; i++) {
            for(let j = 0; j < matrix.length; j++) {

                //condition to discard columns with first index === 0 
                if(matrix[j][i] === 0) {
                    break;
                }

                //concatenation result
                counter = counter + matrix[j][i];
            }
        }
        return counter;
}

/* Test cases */
console.log(matrixElementsSum([[0,1,1,2],[0,5,0,0],[2,0,3,3]]));
//expected output: 9
console.log(matrixElementsSum([[4,0,1],[10,7,0],[0,0,0],[9,1,2]]));
//expected output: 15
console.log(matrixElementsSum([[1,1,1],[2,2,2],[3,3,3]]));
//expected output: 28
console.log(matrixElementsSum([[1],[5],[0],[2]]));
//expected output: 6
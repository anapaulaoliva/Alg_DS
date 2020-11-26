/* https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup
    Complete the countingValleys function below: */
const countingValleys = (n, s) => {
    let counter = 0; 
    let valleys = 0;

    for(let i = 0; i < s.length; i++) {
        if( s[i] == 'D' ){
            counter--;
            if( counter == -1) {
                valleys++;
            }
        } else {
            counter++;
        }
    }
    return valleys;
}

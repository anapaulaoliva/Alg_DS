/* REFACTOR FIZZBUZZ FUNCTION:

in a way that receives two arrays as a configuration, 
first one must be numbers of the condition,
second one the string that you should print,
=> or a dictionary with unlimited numbers and strings,
so the user can, as input, 
configurate any of the numbers and strings to print from 1 to 100 
code also in: https://jsfiddle.net/sghj95aL/4/                                 */


/* PSEUDO CODE: */
//1. Function receives the object
//2. Prints from 1 to 100
//3. At each loop printing number one by one, [i]
//   it must iterate through the dictionary [key]
//   based on all the [key] [value] with same index that found
//4. conditionals: if i % value === 0 storage the key in word variable
//   so it can concat all the keys that accomplish the conditional
//	 before evaluating each given number as conditional, 
// 5. if word is not empty, print it, 
//    else, print number of the loop count.
// 6. Validation for empty input passed as a function: isEmpty

const isEmpty = inputObject => {
    return Object.keys(inputObject).length === 0;
  };
  
  const extremeFizzBuzz = dictionary => { 
    if( !isEmpty(dictionary) ) {
       for( let i = 1; i <= 100; i++ ) { 
          let word = '';
          for( let key in dictionary ) { 
             let value = dictionary[key], conditional = i % value === 0;
             word = conditional ? word + key : word; 
          }
             console.log(word !== '' ? word : i)
          }
    } else {
      console.log('Empty dictionary!');
    }
  }
  
  /* TEST CASES */
  
  extremeFizzBuzz({ 'fizz': 3, 'buzz': 5, 'hello': 7, 'goodbye': 11 });
  //15 => "fizzbuzz", 21 => "fizzhello"
  extremeFizzBuzz({ 'cat': 5, 'bear': 10 });
  //5 => "cat", 10 => "catbear", 100 => "catbear"
  extremeFizzBuzz({'paper': 7,'rock': 14,'scissor': 21});
  //21 => "paperscissor", 42 => "paperrockscissor"
  extremeFizzBuzz({'sun': 2, 'moon': 4, 'rise': 6, 'bow': 8, 'rain': 10, 'storm': 50})
  //16 => "sunmoonbow", 78 => "sunrise", 100 => "sunmoonrainstorm"
  extremeFizzBuzz({}) 
  //"Empty Dictionary!"
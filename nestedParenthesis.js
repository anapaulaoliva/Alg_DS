/*Given a string,
determine if all the parentheses are nested, if its so, return true.
Otherwise, show the index position which broke the condition.*/

const nestedP = str => {
    //evalua que str no este vacio
    if(str !== '') {
        //quita espacios entre parentesis
        let s = str.replace(/\s+/g, '');
        //itera el string
        for(let i = 0; i < s.length; i++) {
            //longitud del string - 1
            let len = s.length - 1;
            //condicional que evalua casos ')('
            if(s[i] === ')' && s[i+1] === '(') {
                return i;
            //condicional que evalua si el string empieza en '(' y termina en '('
            } else if (s[i] === '(' && s[len] === '('){
                //retorna el index del ultimo parentesis que no esta anidado
                return len;
            } else {
                return true;
            }
        }
    //condicional en caso de que el string este vacio
    } else {
        return false;
    }
};

/* Test Cases */

console.log(nestedP(''));
//expected output: false
console.log(nestedP('( )'))
//expected output: true
console.log(nestedP(')('))
//expected output: 0 -index
console.log(nestedP('( ( ( ( () () ) () ) () ) )('));
//expected output: 16 -index
console.log(nestedP('( ( ( ( () () ) () ) () ) )()()()()'));
//expected output: true
console.log(nestedP('()()())('));
//expected output: 7 -index

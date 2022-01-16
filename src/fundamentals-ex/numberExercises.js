export function checkVariable(num)
{
    return num !== 1?num =1:num;    
}

export function checkIfIsNumber(num)
{
    return typeof(num) === 'number'?"number":'not a number';
}

export function checkIfIsInteger(str)
{
    return typeof(str) === 'number'?true:false;
}

export function checkIfNumberIsInfinite(num)
{
    /* Tendrás que utilizar un condicional / if ... */
    return num == Infinity ?"Number is Infinite":"Number is not Infinite";
}

export function sum(num)
{
    /* Completa la function utilizando el operador de suma + */
    while (num < 25){
        num ++;
    }
    return num;
}

export function subtract(num)
{
    /* Completa la function utilizando el operador de sustracción - */
    while (num > 30){
        num --;
    }
    return num;
}

export function multiply(num)
{
    /* Completa la function utilizando el operador de sustracción - */
    return num*5;
}

export function divide(num)
{
    /* Completa la function utilizando el operador de división / */
    return num / 2;
}

export function checkIfNumbIsDivisibleByThree(num)
{
    /* Completa la function utilizando el operador modulus y utiliza el conditional if() */
    return num % 3 == 0?'Number is divisible by 3':'Number is not divisible by 3';
}
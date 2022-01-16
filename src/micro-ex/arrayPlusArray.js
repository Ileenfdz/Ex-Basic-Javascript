/* 
## Array Plus Array 
Obtener la suma de dos matrices / arrays ... en realidad, la suma de todos sus elementos

PD: Cada matriz incluye solo números enteros. La salida también es un número.
*/

export function arrSum(arr1, arr2)
{
    let reducedSum = arr1.reduce((prevValue, nextValue) =>prevValue + nextValue) + arr2.reduce((prevValue, nextValue) =>prevValue + nextValue);
    
    return reducedSum;
}
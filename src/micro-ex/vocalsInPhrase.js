/* 
Escribe un programa que pida una frase y escriba las vocales que aparecen
*/
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
export function getPhrase(phrase) {

    let onlyVowels = '';

    for(let i = 0; i < vowels.length; i++) {
        if(vowels.includes(phrase[i]) && onlyVowels.includes(phrase[i]) == false) {
            onlyVowels += phrase[i];
        }
    } 
    
    return onlyVowels;
}
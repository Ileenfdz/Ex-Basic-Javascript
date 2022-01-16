export function returnAString(str)
{
    /* Completa la function */
    return str;
}

export function concatenateStrings(thirdWord)
{
    /* Completa la function */
    let firstWord = 'I';
    let secondWord = 'Love';

    return firstWord + ' ' +  secondWord + ' ' + thirdWord;
}

export function giveOneLetter(str)
{
    /* Completa la function */
    return str.includes('g') == true? 'g':'No gs';
}

export function giveTheIndexOfWord()
{
    let wordToSearch = 'Butterfly';
    let phrase = "Once upon a time!!!";
    
    return phrase.indexOf('Butterfly');
}

export function replaceFishWords()
{
    let phrase = 'Give a Man a Fish';
    return phrase.replace('Fish', 'Pussy Cat');
}

export function giveAllLettersInUppercase()
{
    let phrase = 'Ride Him, Cowboy';
    return phrase.toUpperCase();
}

export function removeWhiteSpaces()
{
    let phrase = '    Hands Down    ';
    return phrase.split('  ').join('');
}
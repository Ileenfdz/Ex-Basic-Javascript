export function isJane(name)
{
    /* La function debe devolver Jane, obligatorio el uso del comparador == */
    return name !== 'Jane'?'Jane':name;
}

export function compareNumbers(num)
{
    /* La function debe devolver 10, obligatorio el uso del comparador === */
    return num !== 10?10:num;
}

export function isGreaterThan10(num)
{
    return num < 10?num += 10:num;
}

export function isGreaterThan10AndEqualTo20(num)
{
    return num !== 20 && num <= 10 || num > 10?num = 20:num;
}
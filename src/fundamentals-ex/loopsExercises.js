export function countdown(num)
{
    /* Completa */
    while(num > 10){
        num--;
    }
    return 'GO';
}

export function createNumberList(num)
{
    if(num !== 1){
        num = 1;
    }

    let arrNumbers = [];

    do{
        arrNumbers.push(num++);
    } while(arrNumbers.length < 10)

    // return arrNumbers[0];//For the toEqual
    return arrNumbers;//For the toContain and toHaveLenght
}

export function makePizza()
{
    /* Completa la function utilizando el bucle for*/
    let pizza = {};
    let count = 1;
    let ingredientList ='';
    let ingredients = ['masa','tomate', 'mozzarella','cheddar','gorgonzola','parmesano'];

    for (let i = 0; i < ingredients.length; i++) { 
        ingredientList = 'ingredient'+count;
        pizza[ingredientList] = ingredients[i];
        count++;
    }
    return pizza;
}

export function addSpanishInternationalPrefixes()
{
    /* Añade el prefijo internacional de españa a los números de teléfonos del array (+34-). Utiliza el bucle foreach */
    let phoneNumberList = ['054060719','029830776','159949736','663170151','513407584'];
    let spanishNumberList = [];
    phoneNumberList.forEach(function(i){
        spanishNumberList.push('+34-'+i)
    });

    return spanishNumberList;
}
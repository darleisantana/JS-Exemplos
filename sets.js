const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr)
{
    const mySet = new Set(arr);

    return [...mySet];
    //abrir o cochetes e colocar os 3 pontos seguido da variavel se chama hash.
}

console.log(valoresUnicos(myArray));
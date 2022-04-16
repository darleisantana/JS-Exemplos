//Map com This
const maca = 
{
    value : 2,
}

const laranja =
{
    value : 3,
}

function mapComThis(arr, thisArg)
{
    return arr.map(function (item) 
    {
        return item * this.value;
    }, thisArg);
}

const num = [1,2];

console.log('Map com this: this -> maçã', mapComThis(num, maca));
console.log('Map com this: this -> laranja', mapComThis(num, laranja));

//Map sem this
function mult(arr)
{
    return arr.map(function (item) 
    {
        return item * 2;
    });
}

const nums = [1,2];

console.log('Map sem This: ', mult(nums));

//Filter
function filterPares(arr)
{
    return arr.filter(callback());
}

function callback(item2)
{
    return item2 % 2 === 0;
}

const myArray = [1, 23, 55, 67, 30, 2, 4];

console.log('Filter: ', filterPares(myArray));

//Reduce
function somaNumeros(arr) 
{
    return arr.reduce(function(prev, current)
    {
        return prev + current;
    });
}

const arr = [1,2];

console.log('Reduce', somaNumeros(arr));

function validArray(arr, num) 
{
    //Erros possiveis
    try 
    {
        //ReferenceError
        if (!arr && !num) throw new ReferenceError("Passar os Parâmetros!");
        
        //TypeError = Object
        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo Object");  
    
        //TypeError = Number
        if (typeof num !== 'number') throw new TypeError("Array precisa ser do tipo Number");
        
        //RangeError
        if (arr.length !== num) throw new RangeError("Tamanho inválido!");

        return arr;
    } 
    //Tratamento de Error
    catch (e) 
    {
        if (e instanceof ReferenceError) 
        {
            console.log("Este erro é um erro de ReferenceError!");
            throw e;
        }
        else if (e instanceof TypeError) 
        {
            console.log("Este erro é um erro de TypeError!");
            throw e;
        }
        else if (e instanceof RangeError) 
        {
            console.log("Este erro é um erro de RangeError!");
            throw e;
        }
        else
        {
            console.log("Tipo de erro não esperado: "+ e);
        }
    }
}
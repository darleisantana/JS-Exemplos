//Fetch é utilizado para consumir API
//Fetch retorna promise por isso pode se utilizar o then
//tem que conveter que converter seu resultado para .json
fetch(url, Option)
{
    .then(Response => Response.json())
    .then(json => console.log(json))
}

//operações em banco de dados com API com GET
fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(Response => Response.json())
    .then(json => console.log(json))

//operações em banco de dados com API com POST
fetch('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(Response => Response.json())
    .then(json => console.log(json))
//Promise = 2seg
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});

//Async/Await
//Para resolver uma promise, precisa informar que é async para poder utilizar o await
async function resolvePromise() 
{
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida!'));
        }, 3000);
    });
    //await serve para parar o código enquanto não resolve a promise
    const resolved = await myPromise
        .then((result) => result + ' Passando pelo then')
        .then((result) => result + ' e agora acabou')
        .catch((err) => console.log(err.message));

        return resolved;
}

//Async/Await com Try/Catch
async function resolvePromise() 
{
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida!'));
        }, 3000);
    });

    let result;

    try 
    {
        result = await myPromise
            .then((result) => result + ' Passando pelo then')
            .then((result) => result + ' e agora acabou')
    } 
    catch (err) 
    {
        result = err.message;
    }

    return result;
}
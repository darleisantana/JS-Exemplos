const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('Change-cat');
const catImg = document.getElementById('cat');

const getCats = async() => {
   try 
   {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
   } 
   catch (e) 
   {
       console.log(e.message);
   }
};

const laodImg = async () => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', laodImg);

laodImg();

/*
Outra forma de fazer sem utilizar o try e catch

const getCats = async() => {
 
    const data = await fetch(BASE_URL);
        .then((res) => res.json())
        .catch((e) => console.log(e));

    return json.webpurl;
};

const laodImg = async () => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', laodImg);

laodImg();
*/
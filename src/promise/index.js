const promise = new Promise(function(resolve, reject){
    resolve('TOdo fino');
});

const cows = 5;

const countCows = new Promise((resolve, reject) => {
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm, thats enough :D`);
    }else{
        reject(`There's no enough cows on the farm :( `);
    }
});

//el result te devuleve lo que mando el resolve.. el reject lo manejamos con el cath
//el finally se ejecuta basicamente si porque si
countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally message'));


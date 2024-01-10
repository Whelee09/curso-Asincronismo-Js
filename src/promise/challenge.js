import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
  return fetch(urlApi);
};

// fetchData(`${API}/products`)
//   .then(response => response.json())
//   .then(products => {
//     console.log(products);
//   })
//   .then(() => {
//     console.log('sup');
//   })
//   .catch(error => console.log(error));

//respuesta 1

// fetchData(`${API}/products`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((products) => {
//     console.log(products[0]);
//     console.log(products[0].title);
//     return fetchData(`${API}/categories/${products[0].category.id}`)
//   })
//   .then(response => response.json())
//   .then(category => {
//     console.log(category.name);
//   });

//respuesta 2  

fetchData(`${API}/products`)
  .then(response => response.json())
  .then((products) => {
    //console.log(products);//muestra todos los productos
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title);//titulo del producto
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(err => console.log(err))
  .finally(()=> console.log("finally"));





  
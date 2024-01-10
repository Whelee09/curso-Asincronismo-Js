import fetch from "node-fetch"; 
const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, data){
  const response = fetch(urlApi, {
    method: 'POST', 
    mode: 'cors',
    credentials: 'same-origin',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  "title": "laptop de whelee",
  "price": 1000,
  "description": "a laptop my bro",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))


//aportes de otros compa;eros

//Update (solo cambié 'POST' por 'PUT'):


const updateData = (urlApi, data) => {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response;
};
//Y para Delete quité headers y body puesto que lo unico que mandamos es el ID en la url para eliminar el producto de acuerdo con la documentación.


const deleteData = (urlApi) => {
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
    });
    return response;
}
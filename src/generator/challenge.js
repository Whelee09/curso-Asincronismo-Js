import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

async function* render(urlApi){
    let resp = await fetch(urlApi);
    let resp2 = await resp.json();
    yield resp2;
}


render(`${API}/products`).next()
  .then((objects) => {
   //console.log(objects.value);
    return render(`${API}/products/${objects.value[0].id}`).next()
  })
  .then((product) => {
    console.log(product.value.title);
    return render(`${API}/categories/${product.value.category.id}`).next()
  })
  .then((response) =>{
    console.log(response.value.name);
  })

//otra forma que hice antes pero no me gustaron las anidaciones

  // render(`${API}/products`).next()
  // .then(({ value, done }) => {
	//   //console.log(value)
  //   render(`${API}/products/${value[0].id}`).next()
  //     .then(({ value, done }) => {
  //       console.log(value.title)
  //       render(`${API}/categories/${value.category.id}`).next()
  //         .then(({ value, done }) => {
  //           console.log(value.name);
  //         })
  //     });
  // });
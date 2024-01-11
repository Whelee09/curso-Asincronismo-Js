const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(()=> resolve('Async!!'), 4000)
      : reject(new Error('Erro!'));
  })
}

const anotherFn = async () =>{
  const something = await fnAsync();
  console.log(something);
  console.log("HEllo");
} 
 
console.log('Start');
anotherFn();
console.log('End');
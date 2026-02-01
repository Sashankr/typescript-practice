type Car = {
  model : string,
  topSpeed : number,
}

function carInfo(details:Car){
  console.log(`Model : ${details.model}, Top Speed : ${details.topSpeed}`);
}

const car = {
  name : 'Porsche',
  model : '911',
  topSpeed : 250,
}

carInfo(car);

// When we try to pass an object with extra property, its not allowed,but if passed as variable its allowed.
// Object literal may only specify known properties, and 'name' does not exist in type 'Car'.

carInfo({name : 'Porsche',model:'911',topSpeed:250}); 

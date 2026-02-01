type Car = {
  model : string,
  topSpeed : number
}

function carInfo(details:Car){
  console.log(`Model : ${details.model}, Top Speed : ${details.topSpeed}`);
}

carInfo({model : '911',topSpeed:250});

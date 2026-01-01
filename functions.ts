function calculateTotal(
  price:number,
  quantity : number,
  discount : number,
) : number {
  return price * quantity * (1 - discount)
}

// Inferred return type, adding just the types for parameters in functions is enough, typescript can infer what the returned type can be based on this

function prompt(systemPrompt:string,userPrompt:string){
  return `${systemPrompt}\n${userPrompt}`
}

console.log(prompt('You are a helpful assistant','how to reverse a string?'));

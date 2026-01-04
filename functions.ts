function calculateTotal(
  price: number,
  quantity: number,
  discount: number
): number {
  return price * quantity * (1 - discount);
}

// Inferred return type, adding just the types for parameters in functions is enough, typescript can infer what the returned type can be based on this

function prompt(systemPrompt: string, userPrompt: string) {
  return `${systemPrompt}\n${userPrompt}`;
}

console.log(prompt("You are a helpful assistant", "how to reverse a string?"));

// Void return type for a function, this means that nothing is returned from the function.

function generateLog(message: string): void {
  console.log(message);
}

type LoggerCallback = (s1: string, s2: string) => string;

function setLoggerTimeout(loggerCallback: LoggerCallback, delay: number) {
  console.log("Test");
}

// Importing types with type keyword.
// We can import types from external files with the help of type keyword, what this does is, it reduces bundle size when generating production build
// This is because types are not required in production, these are only necessary to debug while writing our code.
// ex : import type { User, Role } from './models'
//

// Union type
function processTicketId(ticketId: string | number) {
  if (typeof ticketId === "string") {
    ticketId = ticketId.split("-")?.[1];
    ticketId = parseInt(ticketId, 10);
  }
  return `Ticket ID ${ticketId} is being processed`;
}

const ticketResponse = processTicketId("Support-124");
console.log(ticketResponse);

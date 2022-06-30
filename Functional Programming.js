//functional programming is a programming paradigm that uses functions as
//its primary way of representing computation.

wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filter(predicate, array) {
  if (array.length === 0) {
    return [];
  }
  if (predicate(array[0])) {
    return [array[0]].concat(filter(predicate, array.slice(1)));
  }
  return filter(predicate, array.slice(1));
}

function isEven(number) {
  return number % 2 === 0;
}

wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evens = filter(isEven, wholes);
odds = filter(n => !isEven(n), wholes);
console.log("even" + " " + evens);
console.log("odd" + " " + odds);

//isPrime is a function that returns true if a number is prime.
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const possibleFactors = filter(m => m > 1 && m < n, wholes);
  const factors = possibleFactors.filter(m => n % m === 0);
  return factors.length === 0 ? true : false;
}

primes = filter(isPrime, wholes);
console.log("primes" + " " + primes);

//Map is a function that takes a function and a list and returns a new list.
//It applies the function to each element of the list and returns a new list.
function map(f, array) {
  if (array.length === 0) {
    return [];
  }
  return [f(array[0])].concat(map(f, array.slice(1)));
}

function double(n) {
  return n * 2;
}

isDouble = map(double, wholes);
halved = map(n => n / 2, wholes);
console.log("doubled" + " " + isDouble);
console.log("halved" + " " + halved);

//FizzBuzz is a function that returns a list of numbers from 1 to n.
//If the number is divisible by 3, it returns "Fizz".
//If the number is divisible by 5, it returns "Buzz".
//If the number is divisible by both 3 and 5, it returns "FizzBuzz".
//Otherwise, it returns the number itself.
fizzBuzz = map(n => {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  }
  if (n % 3 === 0) {
    return "Fizz";
  }
  if (n % 5 === 0) {
    return "Buzz";
  }
  return n;
}, wholes);

console.log("fizzBuzz" + " " + fizzBuzz);

//Reduce is a function that takes a function and a list and returns a single value.
//It applies the function to each element of the list and returns a single value.
function reduce(f, array, initial) {
  if (array.length === 0) {
    return initial;
  }
  return reduce(f, array.slice(1), f(array[0], initial));
}

// function reduce(reducerFn, initialValue, array) {
//   if (length(array) === 0) return initialValue;
//   const newInitialValue = reducerFn(initialValue, head(array));
//   return reduce(reducerFn, newInitialValue, tail(array));
// }

Reducer = reduce((a, b) => a + b, wholes, 0);
console.log("Reducer" + " " + Reducer);


//Currying is a function that takes a function and
// returns a function.
//It takes a function and returns a function
// that takes a single argument.
function greetCurried(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  }
}

const greetIgbo = greetCurried("Ndewo");
console.log(greetIgbo("Maazi"));

function writeMessage(message, salutation, name) {
  return `${message} ${salutation} ${name}`;
}

function signedMessage(salutation) {
  return (message, name) => writeMessage(
    message, name, salutation
  )
}

BusinessMessage = signedMessage("Deal");
console.log(BusinessMessage("Hello", "Maazi"));

//Function composition is a technique
// that allows us to combine functions.
//Compose a function that takes a single word and return a plural word.
function pipeline(...fns) {
  return function (x) {
    return fns.reduce((v, f) => f(v), x);
  }
}

// function pipeline(...fns) {
//   return input => reduce((acc, fn), input, fns);
// }

pluralize = singleWord => `${singleWord}'s`;
heart = word => `${word}` + " " + "♥";
exclaim = sentence => `${sentence}` + "!";
showLove = pipeline(pluralize, heart, exclaim);
console.log(showLove("People"));
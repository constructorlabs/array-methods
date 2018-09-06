function removeMiddle( words ){
  let x = (words.length-1)/2;
  return words.splice(x,1);
  // words is an array which contains an odd number of strings
  // return a new array containing only the middle word
  // the words array should no longer contain the middle word

  // hint: use splice
}


function get2ndAnd3rd( myArray ){
  return myArray.slice(1,3);
  // myArray is an array of numbers
  // return an array containing the 2nd and 3rd items from myArray
  // myArray should remain unchanged

  // hint: use slice
}

function stringify( myArray ){
  const output = myArray.map(function(item){
    return item.toString();
  });
  return output;
  // myArray is an array of numbers
  // return a new array which has all items converted to strings
  // myArray should remain unchanged
}

function types(input){
  return input.map(item => {
    if (item === null) {return "null";}
    else {return typeof item};
  });
  }

  // input is an array of items of all types
  // return an array which contains the
  // type of each of the items in input array


function wordLengths( words ){
  return words.map(function(item){
    return item.length;
  })
  // words is an array of strings
  // return a new array that contains the number of letters in each word
  // for example
  // input:
  // [ 'jupiter', 'mars', 'saturn' ]
  // output:
  // [ 7, 4, 6]
}

function cities( capitals, formatter ){
  return capitals.map(formatter);

  // capitals is an array of objects that have a city and country property
  // for example
  // {
  //   city: 'Paris',
  //   country: 'France'
  // }
  // formatter is a callback function provided for you which
  // transforms a capital object into a sentence returns it such as
  // 'Paris is the capital of France'.
  // Apply formatter to each object in capitals array and
  // return an array of resulting sentences
}

function largerThanTen( numbers ){
  return numbers.filter(i => i > 10);
  // numbers is an array of numbers
  // return a new array that contains only numbers
  // from the input array which are greater than 10
}

function even( numbers ){
  return numbers.filter(i => i % 2 === 0);
  // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
}

function findTheNeedle( words ){
  return words.findIndex(item => item === "needle");
  }
  // words is an array of words
  // return the index of the word 'needle'


function findLargest( numbers ){
  return numbers.sort((a,b)=>(b-a))[0];
  // numbers is an array of numbers
  // return the largest number from that array
}

function addAllnumbers( numbers ) {
  return numbers.reduce((a,b)=>(a+b));
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
}

function sortingStrings(strings){
  return strings.sort();
  // strings is an array of strings
  // sort them in alphabetical order and return the sorted array
}

function sortingNumbers(numbers){
  return numbers.sort((a,b)=>(a-b));
  // numbers is an array of numbers
  // sort them in ascending order and return the sorted array
}

function sortingNumbersDescending(numbers){
  return numbers.sort((a,b)=>(b-a));
  // numbers is an array of numbers
  // sort them in descending order and return the sorted array
}

function sortingCars(cars){
  return cars.sort((a,b)=>(a.year-b.year));
  // a car object has a make, model, year. For example
  // const car = {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   year: 1994
  // }
  //
  // cars is an array of car objects. Sort them ascending by year and return
  // the sorted array.
}

function deleteColour( car ){
  delete car.colour;
  return car;
  // car is an object with properties make, model and colour. For example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   colour: 'red'
  // }

  // delete the property colour and return car without this property
};

function paintShop( cars, colour ){
  return cars.map(item => {
    let copy = Object.assign({}, item);
    if (copy.make === "Ford") {
      copy.colour = colour;
    };
    return copy;
});

  // cars is an array of objects that have
  // their properties are `make`, `model` and `colour`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   colour: 'Red'
  // }

  // set the colour of each Ford car to be the colour
  // passed in and return the new array

  // the original array passed in should not change
  // hint: look up 'Cloning objects in JavaScript'
}

function secondLargest( numbers ){
  const x = numbers.slice(0);
  const y = x.sort((a,b)=>(b-a))[1];
  return numbers.findIndex(item => item === y);


  // numbers is an array of numbers
  // return the index of the second
  // largest number in the array
}

function addSales( city, sales ){
  // Argument city is a string containing city name
  // Argument sales is a integer containing the sales
  // for that location

  // We have object containing sales
  const globalSales = {
    london: 200,
    paris: 300,
    berlin: 150,
    madrid: 400
  };

  if (globalSales.hasOwnProperty(city)) {
    globalSales[city] += sales;
  }
  else {
    globalSales[city] = sales;
  }
  return globalSales;

  // If city already exists in object, add sales figure
  // to its total. If city does not exist, create a new
  // property and save the sales figure as its value.

  // return the updated globalSales object
}

function totalSales( sales ){
  let sum = 0;
  for (item in sales) {
    sum += sales[item];
  }
  return sum;
  // You are passed a sales object similar to the one
  // in the previous exercise. Add up all the sales figures
  // and return the total.

  // Hint: look up how to get the values of an object
}

function highestSum( input ){
  return input.map(item => item.reduce((a,b)=>(a+b),0)).sort((a,b)=>(b-a))[0];
  // input is an array of arrays of numbers.
  // For example
  // [
  //   [ 4, 3, 2],
  //   [ 7, 1],
  //   [ 9, 11, 15, 1]
  // ]

  // If an inner array is empty, consider its sum to be 0

  // find and return the largest sum of an inner array
}

function walletSum( wallet ){
  // A wallet object has keys which are the denominations
  // and values which are the number of those notes in the
  // wallet. See example below.
  //
  // const exampleWallet = {
  //   5: 3,
  //   10: 7,
  //   20: 2
  // };
  //
  // calculate the sum of money in the wallet and return
  // the total.

  // the denominations used in this exercise are 5, 10 and 20
  let total = 0;
  for (denom in wallet) {
    total += denom*wallet[denom];
  }
  return total;
}

function walletMerge( wallet1, wallet2 ){

  const wallet = {
    5: 0,
    10: 0,
    20:0
  }

  for (denom in wallet1) {
    wallet[denom] += wallet1[denom];
  }

  for (denom in wallet2) {
    wallet[denom] += wallet2[denom];
  }

  return wallet;
  // return a new wallet object containing the contents of
  // both wallets passed in.

  // the denominations used in this exercise are 5, 10 and 20
}

function arrayOfWallets( wallets ){
  // wallets is an array of wallets
  const wallet = {
    5: 0,
    10: 0,
    20:0
  }
  wallets.forEach(function(item){
    for (denom in item) {
      wallet[denom] += item[denom];
    }
  });
  return wallet;
  // Return a new wallet object containing the notes from all wallets
  // the denominations used in this exercise are 5, 10 and 20
}

function crazyMoney( wallets ){
  let sum = 0;
  wallets.forEach(function(item){
    for (denom in item) {
      sum += item[denom]*denom;}});
  return sum;
}
/*
  wallets.forEach(function(item){
    for (denom in item) {
      if (wallet.hasOwnProperty(denom)) {
      wallet[denom] += item[denom];
      }
      else wallet[denom] = item[denom];
    }
  }); */


  // In previous exercises the notes denominations were
  // limited to 5, 10 and 20. We now have wallets that
  // can have notes of any denomination. Implement a function
  // which accepts an array of random sized notes and
  // calculate the total amount of money in them.

  // Hint: look up how to get keys of objects. You may also need
  // to use square bracket notation to look up values which
  // correspond to those keys


/*
 * STRETCH GOALS
 */

function map(array, callback){
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr[i] = callback(array[i]);
  }
  return newArr;


  // Implement a map function which accepts an array of items and a callback function
  // It should call the callback with each item from the array
  // and return a new array that contains the output of each callback

  // You will probably need to use a for loop for this. Do not use the
  // JavaScript map array method

  // Implement your own unit tests, let us know if you need any help
}

function filter(array, callback){
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;

  // Implement a filter function which accepts an array of items and a callback function
  // It should call the callback with each item from the array
  // and return a new array that the items from the array for which the
  // callback returns a truthy value

  // You will probably need to use a for loop for this. Do not use the
  // JavaScript filter array method

  // Implement your own unit tests, let us know if you need any help
}

function find(array, callback){
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }

  // Implement a find function which accepts an array of items and a callback function
  // It should return the first item from the array for which
  // the callback returns a truthy value

  // You will probably need to use a for loop for this. Do not use the
  // JavaScript find array method

  // Implement your own unit tests, let us know if you need any help
}

function reduce(array, reducer, initialAcc){
  for (let i = 0; i < array.length; i++) {
    initialAcc = reducer(array[i],initialAcc);
  }
  return initialAcc;
  // Implement a reduce function which accepts an array of items, a reducer function
  // and an initial value of the acc.
  // It should return the last value that was output by the reducer.

  // The reducer expects to receive an acc and current item from the array.
  // The initial value of the acc is passed as an argument to this function

  // You will probably need to use a for loop for this. Do not use the
  // JavaScript reduce array method

  // Implement your own unit tests, let us know if you need any help
}

module.exports = {
  removeMiddle,
  get2ndAnd3rd,
  stringify,
  types,
  wordLengths,
  cities,
  largerThanTen,
  even,
  findTheNeedle,
  findLargest,
  addAllnumbers,
  sortingStrings,
  sortingNumbers,
  sortingNumbersDescending,
  sortingCars,
  deleteColour,
  paintShop,
  secondLargest,
  addSales,
  totalSales,
  highestSum,
  walletSum,
  walletMerge,
  arrayOfWallets,
  crazyMoney,
  map,
  filter,
  find,
  reduce
};

// TODO: In `arrays.js`, define a variable called `chocolateBars`. Its value should be an array of the strings `snickers`, `hundred grand`, `kitkat`, and `skittles`.

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

/*
TODO: In 'arrays.js`, define two functions, `addElementToBeginningOfArray` and `destructivelyAddElementToBeginningOfArray`. Both functions take two parameters, an array and an element to add to the beginning of the array, and both functions should add the element to the beginning of the array and then return the whole array. The destructive function, `destructivelyAddElementToBeginningOfArray`, should alter the original array that's passed in; `addElementToBeginningOfArray`, on the other hand, should return a new array **and not modify the original**.
*/
function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

/*
TODO: Define two more functions, `addElementToEndOfArray` and `destructivelyAddElementToEndOfArray`. These functions also take two arguments, an array and an element to add to the end of the array. `addElementToEndOfArray` **should not** alter the original array; `destructivelyAddElementToEndOfArray` **should** alter the original array.
*/
function addElementToEndOfArray(array, itemToAdd){
  var newArray = [...array, itemToAdd];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, itemToAdd){
  array.push(itemToAdd);
  return array;
}

//TODO: Define a function in `arrays.js` called `accessElementInArray`. The function should accept an array and an index and return the element at that index.

function accessElementInArray(array, index){
  return array[index];
}

//TODO: Define a function in `arrays.js` called `destructivelyRemoveElementFromBeginningOfArray` that takes an array as its only argument and removes the first element. Your function should then return the entire array, and it **should** mutate the array.
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array;
}

//TODO: Define a function in `arrays.js` called `removeElementFromBeginningOfArray`. It takes an `array` as its only argument. The function should remove the first element in the array. This function should return the _entire_ array in the same line, and it **should not** mutate the original array.
function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray;
}

//TODO: Define a function in `arrays.js` called `destructivelyRemoveElementFromEndOfArray` that takes an array as its only argument and removes the last element. Your function should return the entire array, and it **should** mutate the array.
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

//TODO: Define a function in `arrays.js` called `removeElementFromEndOfArray` that takes an array as its only argument and removes the last element. Your function should return the array without the last element, and it **should not** mutate the original array.
function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length-1);
  return newArray;
}

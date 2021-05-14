// Write functions that will return head and tail of Array

function getHead(arr) {
  let [head] = arr;
  return [head];
}

function getTail(arr) {
  let [, ...tail] = arr;
  return tail;
}

let array = [1, 2, 3, 4];

let printHead = getHead(array);
console.log(printHead); // => [1]

let printTail = getTail(array);
console.log(printTail); // => [2, 3]

// Write function that will do reverse operation for Object.entries

function fromPairs(arr) {
  let newObj = {};

  for (const key of arr) {
    let innerArr = key;
    newObj[innerArr[0]] = innerArr[1];
  }
  return newObj;
}

let print = fromPairs([
  ["a", 1],
  ["b", 2],
]);

console.log(print);
// => { 'a': 1, 'b': 2 }

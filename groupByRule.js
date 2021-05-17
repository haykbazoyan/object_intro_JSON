// Write function that will group by some rule

function groupByKeys(array) {
  let groupObj = {};
  let elementsLengths = [];

  for (const key of array) {
    elementsLengths.push([key.length]); // (i) => i.length            // [ [ 3, 'one' ], [ 3, 'two' ], [ 5, 'three' ] ]
  }

  for (let i = 0; i < elementsLengths.length; i++) {
    let index = elementsLengths[i][0];
    if (groupObj.hasOwnProperty(index)) {
      groupObj[index].push(array[i]);
    } else {
      groupObj[index] = [array[i]];
    }
  }

  return groupObj;
}

function groupByMathFloor(array, fn) {
  let groupObj = {};
  let newArr = [];

  for (const key of array) {
    newArr.push([Math.floor(key)]); // fn = Math.floor
  }

  for (let i = 0; i < newArr.length; i++) {
    let index = newArr[i];
    if (groupObj.hasOwnProperty(index)) {
      groupObj[index].push(array[i]);
    } else {
      groupObj[index] = [array[i]];
    }
  }

  return groupObj;
}

console.log(groupByMathFloor([6.1, 4.2, 6.3]));

function groupBy(array, fn) {
  return groupByKeys(array);
}

console.log(groupBy(["one", "two", "three"]));

// let print1 = groupBy([6.1, 4.2, 6.3], Math.floor);
// console.log(print1);   // => { '4': [4.2], '6': [6.1, 6.3] }

// let print2 = groupBy(["one", "two", "three"], (i) => i.length);
// console.log(print2);   // => { '3': ['one', 'two'], '5': ['three'] }
// //let groupObj = Object.fromEntries(elementsLengths); FOR READ

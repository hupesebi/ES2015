// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
const filterOdds = (...nums) => nums.filter(num => num % 2 === 0);

// function find min
const findMin = (...nums) => Math.min(...nums)

//mergeObjects
//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
const obj1 = {
    a : 1,
    b: 2,
};

const obj2 = {
    c: 3,
    d : 4,
};

const mergeObject = {...obj1, ...obj2}

//doubleAndReturnArgs
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(double => double * 2)]

// Slice and Dice
/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = items => {
    const random = Math.floor(Math.random()*items.length)
   return items.filter((arr, idx) => {
          return random !== idx;
    })
}

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {...obj, [key]: val}

/** Return a new object with a key removed. */
const removeKey = (obj,key) => {
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {...obj1, ...obj2}

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {...obj, [key]:val}
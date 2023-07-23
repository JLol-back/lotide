// Equal Arrays Function from previous exercise

function eqArrays(array1, array2) {
  let isEqual;
  if (array1.length !== array2.length) {
    isEqual = false;
    return isEqual;
  } else if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        //console.log(`Arrays are not equal: Array 1, position ${i} (${array1[i]}) does not equal Array 2, position ${i} (${array1[i]})`);
        isEqual = false;
        //console.log(isEqual);
      } else {
        //console.log("Arrays are equal")
        isEqual = true;
      }

    }
  } return isEqual;
}

// Assert Arrays Equal Function from previous exercise

const assertArraysEqual = function(first, second) {

  if (eqArrays(first, second) === true) {
    console.log(`✅✅✅ Assertion Passed: ${first} exactly matches ${second}`);
  } else if (eqArrays(first, second) === false) {
    console.log("👎 👎 👎 Assertion Failed: these arrays do not match");
  }
};


// Without Function 

/* This function should take in a source array and a itemsToRemove array. 
It should return a new array with only those elements from source that 
are not present in the itemsToRemove array.
*/

let remove = function(element, itemsToRemove) {
  let keep = true;
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (element === itemsToRemove[i]) {
      keep = false;
      return keep;
    }
    return keep; 
  } 
 }


function without(source, itemsToRemove) {
 // let newArray = source;
  result = source.filter(element => remove(element, itemsToRemove));
  console.log(result);

 // console.log(Array.isArray(testArray));
  //console.log(typeof testArray);
 // console.log(typeof newArray);
 // source.forEach((element, index) => {
  //  for (let i = 0; i < itemsToRemove.length; i++) {
    //  if (element === itemsToRemove[i]) {
     //   console.log(element + "is equal to " + itemsToRemove[i] + " and needs to be removed");
     //   console.log("index is " + index);
     //   newArray.splice(index, 1);
     //   console.log(newArray + " after splice");
     // } 
 ///   }  
//});
  
 // for (let s = 0; s < source.length; s++) {
   // for (let r = 0; r < itemsToRemove.length; r++) {
     // if (source[s] !== itemsToRemove[r]) {
        //console.log(`${r} times through items to remove loop,${s} times through source loop, source = ${source[s]}, item to remove = ${itemsToRemove[r]}`);
        //newArray.push(source[s]);
        //console.log(newArray);
      }

   // }
 // } return newArray;
//}

without([1, 2, 3], [1, 3])

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]



/*

function without(source, itemsToRemove) {
  for (let i = 0; i <= itemsToRemove.length; i++) {  
    let newArray = source;
    source.forEach(item => {
      if (item === itemsToRemove[i]) {
        newArray = newArray.slice(i);
        //console.log(newArray);
      }
    }); return newArray;
  } 
}

without([1, 2, 3], [1, 3]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]










function without(source, itemsToRemove) {
  let newArray = source;  
  for (let i = 0; i < itemsToRemove.length; i++) {  
      source.forEach(item => {
        if (item === itemsToRemove[i]) {
          newArray = newArray.slice(i);
          //console.log(newArray);
        }
      }); 
    }
 return newArray;
}
  without(["1", "2", "3"], [1, 2, "3"])

//  push values to new array instead of altering array?





const testArray = [1, 2, 3];

function without(source, itemsToRemove) {
  let newArray = source;
 // console.log(Array.isArray(testArray));
  //console.log(typeof testArray);
 // console.log(typeof newArray);
  source.forEach((element, index) => {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (element === itemsToRemove[i]) {
        console.log(element + "is equal to " + itemsToRemove[i] + " and needs to be removed");
        console.log("index is " + index);
        newArray.splice(index, 1);
        console.log(newArray + " after splice");
      } 
    }  
  });
  
 // for (let s = 0; s < source.length; s++) {
   // for (let r = 0; r < itemsToRemove.length; r++) {
     // if (source[s] !== itemsToRemove[r]) {
        //console.log(`${r} times through items to remove loop,${s} times through source loop, source = ${source[s]}, item to remove = ${itemsToRemove[r]}`);
        //newArray.push(source[s]);
        //console.log(newArray);
      }

   // }
 // } return newArray;
//}


*/

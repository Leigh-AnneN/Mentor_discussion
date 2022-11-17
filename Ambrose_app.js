// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as 
// the second parameter or undefined if the value is not found in the array.

// Examples:
//     find([1,2,3,4,5], 3) // 3
//     find([1,2,3,4,5], 10) // undefined
// */

function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  }

// QUESTION, what is [0]? On line 12 and 21?
// and again:

function findInObj(arr, key, searchValue) {
  return arr.filter(function(val) {
    return val[key] === searchValue;
  })[0];
}

// *****************************************************

// Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition 
// function should run the callback function on each value in the array and if the result of the callback function at that specific value is 
// true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value 
// should be placed in the second subarray. 

// QUESTION: Can we talk through these solutions to the above problem?
Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    return arr.reduce(function(acc,next){
    if (callback(next)){
        acc[0].push(next); //placed in the first array
    } else{
        acc[1].push(next); //placed in the second array
    }
    return acc;
    },[[],[]]);
}

// *****************************************************

// QUESTION: Why does my function not work- from line 90, function at line 104 is what ended up working  

// function betterThanAverage(classPoints, yourPoints) {
//   const classAve = classPoints.reduce(function(accum, nextVal) {
//   return (accum + nextVal) / classPoints.length;
//   });
//   if (yourPoints > classAve){
//     return true;
//   }
//   else {
//     return false;
//     };
// //    return classAve > yourPoints? true : false;
   
//   }
   
  function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    let ave = 0;
        
        for (let i = 0 ; i < classPoints.length; i ++){
        sum += classPoints[i];
        };
    ave = (sum + yourPoints) / (classPoints.length + 1);
    if (ave < yourPoints) {
      return true;
    } else {
      return false;
    };
    };

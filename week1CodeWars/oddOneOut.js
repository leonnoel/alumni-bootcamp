// https://www.codewars.com/kata/59670a7591dae8b6900000e4

function oddNum(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 !== 0) return arr.indexOf(arr[i]);
    }
    return -1;
  }
  function consecutive(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
      if((arr[i] === a && arr[i + 1] === b) || (arr[i + 1] === a && arr[i] === b)) return true; 
    }
    return false;
  }
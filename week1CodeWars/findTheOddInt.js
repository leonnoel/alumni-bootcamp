// https://www.codewars.com/kata/54da5a58ea159efa38000836

const createNumMap = arr => {
    const numMap = {};
    for(let num of arr) {
      numMap[num] = numMap[num] + 1 || 1;
    }
    return numMap;
  }
  
const findOdd = arr => {
    let result = 0
    const numMap = createNumMap(arr);
    Object.keys(numMap).forEach(key => {
      if (numMap[key] % 2 !== 0) result = parseFloat(key)
    });
    return result;
}

  
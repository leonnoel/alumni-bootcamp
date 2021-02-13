const sumPairs = (numbers, sum) => {
    if (numbers.length < 2) return undefined; //not enough numbers for pair.
    const numbersSet = new Set() // create an empty set
    numbersSet.add(numbers[0]); // add the first number into the empty set
    for (let i = 1; i < numbers.length; ++i){ // loop through the array of numbers starts at the second number in array
      let needed = sum - numbers[i]; // the needed value is the sum minus the current value
      if (numbersSet.has(needed)){ //check if we have already seen the number needed to complete the pair.
        return [needed, numbers[i]]; // return the answer
      }
      numbersSet.add(numbers[i]);//if not insert the number in set and continue.
    }
    return undefined;//No answer found
  }

  console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))


  
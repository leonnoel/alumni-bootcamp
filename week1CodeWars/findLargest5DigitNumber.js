const findLargest5DigitNumber = digits => {
    let answer = 0;
    
    for (let i = 0; i< digits.length; i++){
      let number = digits.substr(i, 5);
      if(Number(number) > answer) answer = Number(number);
    }
    return answer;
  }
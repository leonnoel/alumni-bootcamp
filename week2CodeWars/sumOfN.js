function sumOfN(n) {
    let acc = 0
    const newNum = [];
    if(Math.sign(n) !== -1) {
      for(let i = 0; i <= n; i++) {
        newNum.push(i + acc)
        acc += i
      }
    } else {
      for(let i = 0; i >= n; i--) {
        newNum.push(i + acc);
        acc += i;
      }
    }
    return newNum;
  };
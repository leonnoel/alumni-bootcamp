// An iterative approach
const vowelsCounter = str => {
    let counter = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let char of str.toLowerCase()) {
        if(vowels.includes(char)) counter++;
    }
    return counter;
}

// Regular expressions -- 88% faster than the iterative approach
const vowelsCounter2 = str => {
    const counter = str.match(/[aeiou]/gi);
    return counter ? counter.length : 0;
}


console.log(vowelsCounter2('mneoroiriaerioeareiario')) // 16
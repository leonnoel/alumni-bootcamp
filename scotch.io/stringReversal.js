// Chaining Built in methods -- Least performant
const reverseStr = str => {
    return str.split('').reverse().join('');
}

// Using spread operator in place of the split('') method
const reverseStr2 = str => {
    return [...str].reverse().join('');
}

// The for loop way
const reverseStr3 = str => {
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// The for of way
const reverseStr4 = str => {
    let reversed = '';
    for(let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

// The recursive way
const reverseStr5 = str => {
    return str === '' ? '' : reverseStr5(str.subst(1)) + str[0];
}


// The Reduce way --- most performant
const reverseStr6 = str => {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

const reverseStr7 = str => {
    return [...str].reduce((reversed, char) => char + reversed, 0)
}
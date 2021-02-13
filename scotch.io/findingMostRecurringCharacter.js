const createCharMap = str => {
    const charMap = {};
    for(let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

const maxRecurringChar = str => {
    const charMap = createCharMap(str);
    let charMax = '';
    let max = 0

    for(let char in charMap) {
        if(charMap[char] > max) {
            max = charMap[char];
            charMax = char;
        }
    }
    return charMax;
}

console.log(maxRecurringChar('I love squishes'))
const checkCharacters = (stringA, stringB) => {
    let result = 0
    for(let i = 0; i < stringA.length; i++) {
        if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) result++ 
    }
    return result;
}

const hammingDistance = (stringA, stringB) => {
    return stringA.length === stringB.length ? 
        checkCharacters(stringA, stringB) : 
        new Error('Strings do not have equal length');
}

console.log(hammingDistance('river', 'rover'))
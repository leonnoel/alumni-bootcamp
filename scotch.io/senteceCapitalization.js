// forEach()
const sentenceCap = str => {
    const wordsArray = str.toLowerCase().split(' ');
    const capArray = [];
    wordsArray.forEach(word => capArray.push(word[0].toUpperCase + word.slice(1)))  
    return capsArray.join(' ');
}

// for of
const sentenceCap2 = str => {
    const words = []

    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
    }

    return words.join(' ')
}

// using map array -- fastes

const sentenceCap3 = str => {
    const wordsArray = str.toLowerCase().split(' ');
    const capArray = wordsArray.map(word => {
        return word[0].toUpperCase() + word.slice(1)
    })
    return capArray.join(' ')
}

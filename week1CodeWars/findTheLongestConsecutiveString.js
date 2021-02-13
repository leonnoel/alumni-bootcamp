// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
const findTheLongestConsecutiveString = (strArr, k) => {
    const characterCount = strArr.length
    if (characterCount === 0 || k > characterCount || k <= 0) return ''
  
    return strArr.reduce((longest, item, i) => {
      const combined = strArr.slice(i, i + k).join('')
      return combined.length > longest.length ? combined : longest
    }, '')
}
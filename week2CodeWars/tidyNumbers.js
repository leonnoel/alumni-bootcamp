// https://www.codewars.com/kata/5a87449ab1710171300000fd
function tidyNumber(n){
    const str = n.toString()
    for(let i = 0; i < str.length; i++) {
      if(str[i] > str[i + 1]) return false
    }
    return true
}
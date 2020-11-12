const validParentheses = parentheses => {
    const middle = parentheses.length / 2
  
    for (let i = 0; i <= middle; ++i) {
      parentheses = parentheses.replace('()', '')
    }
  
    return parentheses === ''
}

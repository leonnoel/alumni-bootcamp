const reverser = number => {
    let lastDigit = 0;
    let result = 0;
    while( number ){
        lastDigit = number % 10;  
        result = (result * 10) + lastDigit;  
        number = Math.floor(number / 10); 
    }   
    return result;
}

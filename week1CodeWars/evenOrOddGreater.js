function evenOrOdd(str) {
    let odd = [];
    let even =[];
    const strArray = str.split('')
    
    strArray.map(char => +char % 2 === 0 ? even.push(+char) : odd.push(+char))
    odd = odd.reduce((sum, num)=> sum + num,0);
    even = even.reduce((sum, num)=> sum + num,0)
    if(odd === even) return 'Even and Odd are the same'
    return odd > even? 'Odd is greater than Even' : 'Even is greater than Odd';
}
const suspectInfo = {james: ['Jacob', 'Bill', 'Lucas'],
                      johnny: ['David', 'Kyle', 'Lucas'],
                      peter: ['Lucy', 'Kyle']}
const deadFolks = ['Lucas', 'Bill']

const whoIsTheKiller = (suspectInfo, dead) => {
   console.log(Object.keys(suspectInfo))
}

console.log(whoIsTheKiller(suspectInfo, deadFolks));


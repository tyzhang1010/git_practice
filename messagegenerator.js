//Function that generate a random number
const generatRandomNum = (num) => {
    return Math.floor(Math.random() * num)
}
//object of phrases
const collectionOfPhrase = {
    day: ['Mon', 'Tus', 'Wed', 'Thur', 'Fri'],
    fortuneOutput: ['bad luck', 'not too bad luck', 'good luck'],
    advice: ['go out and make some friends', 'read a book', 'trust no one']
}
//store the phrase in an array
let wisdomArray = []

//itelarate through the obj
for (prop in collectionOfPhrase){
 let arrayIndex = generatRandomNum(collectionOfPhrase[prop].length)
//generate phrases
switch (prop) {
    case 'day': 
        wisdomArray.push(`Today is ${collectionOfPhrase[prop][arrayIndex]}.`)
        break 
    case 'fortuneOutput':
        wisdomArray.push(`You are having a ${collectionOfPhrase[prop][arrayIndex]}.`)
        break
    case 'advice': 
        wisdomArray.push(`You should ${collectionOfPhrase[prop][arrayIndex]}.`)
        break
    defalut:
        console.log("Wrong input")

  }
}

formattedWisdom = (arr) => {
    return wisdomArray.join('\n')
}

console.log(formattedWisdom(wisdomArray))



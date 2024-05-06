// let numbers = [1,2,3,4,5,6,7,8,9]
// numbers.filter(function(num){
//     if(num % 2 !==0){
//         console.log(num)
//     }
// })

// let strings = ["hi i am santhosh","i am going to temple","to meet god"]
// let titleCapsArray = strings.map(function(str){
//     return str.replace(/\b\w/g,function(char){
//         return char.toUpperCase()
//     })
// })
// console.log(titleCapsArray)

// let numbers = [1,2,3,4,5]
// let sum = numbers.reduce(function(total,current){
//     return total + current
// },0)
// console.log(sum)


// let numbers =[2,3,4,5,6,7,8,9,10]
// let primeNumber = numbers.filter(function(num){
//     for (let i=2;i<=Math.sqrt(num);i++){
//         if (num % i === 0){
//             return false
//         }
//     }
//     return num > 1
// })

// console.log(primeNumber)

// let words = ["bag","water","chair","bed"]
// let palindromes = words.filter(function(word){
//     return word === 
//     word.split('').reverse().join('')
// })
// console.log(palindromes)

// let arr1 = [1,3,5]
// let arr2 = [2,4,6]
// let mergedArr = arr1.concat(arr2).sort((a,b) => a - b)
// let medianIndex = Math.floor(mergedArr.length/2)
// let median = mergedArr.length % 2 === 0 ?(mergedArr[medianIndex - 1] + mergedArr[medianIndex])/2 : mergedArr[medianIndex]

// console.log(median)


// let array = [1,2,2,3,4,4,5]
// let uniqueArray = array.filter(function(value,index,self){
//     return self.indexOf(value) === index
// })

// console.log(uniqueArray)


// let array = [1,2,3,4,5]
// let rotations = 3
// let rotatedArray = (function(arr,k){
//     for (let i = 0;i<k;i++){
//         let temp = arr.pop()
//         arr.unshift(temp)
//     }
//     return arr;
// })(array.slice(), rotations)

// console.log(rotatedArray)


// const numbers = [1,2,3,4,5,6,7,8,9]
// const oddNumbers = numbers.filter(num => num % 2 !==0)
// console.log(oddNumbers)


// const strings = ["hi i am santhosh","i am going to temple","to meet god"]
// const titleCaps = strings.map(str => str.charAt(0).toUpperCase()+str.slice(1))
// console.log(titleCaps)


// const numbers = [1,2,3,4,5]
// const sum = numbers.reduce((acc,curr) => acc + curr,0)
// console.log(sum)

// const numbers = [1,2,3,4,5,6,7,8,9]
// const isPrime = num => {
//     for (let i = 2; i<= Math.sqrt(num);i++){
//         if (num % i === 0){
//             return false
//         }
//     }
//     return num > 1
// }
// const primeNumbers = numbers.filter(isPrime)
// console.log(primeNumbers)

const strings = ["bed","chair","window","air"]
const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr
}

const palindromes = strings.filter(isPalindrome)
console.log(palindromes)
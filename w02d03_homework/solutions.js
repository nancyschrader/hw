// Verbal Questions
// 1. A parameter is a variable in a method definition. 
//    When a method is called, the arguments are the data you pass into the method's parameters. 
//    Parameter is variable in the declaration of function. 
//    Argument is the actual value of this variable that gets passed to function.
// 2. console.log is only used for debugging/informative purposes. 
//    return is an integral part of the Javascript language
// Palindrome

const checkPalindrome = (string) => {
    const reverseString = string.toLowerCase().split("").reverse().join("");
    if(reverseString === string.toLowerCase()) {
        return true
    }
    return false
};

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

// Sum Array
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr(i)
    }
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Prime Numbers

const checkPrime = num => {
    for(let i =2; i <= Math.sqrt(num); i++); { // I think??
        if (num % i === 0) {
            return false
        }
    }
    return true  
}
console.log(checkPrime(25));

const printPrimes = (limit) => {
    for(let i = 0; i <= limit; i++); {
        if(checkPrime(i)); {
            console.lof(i);
        }
    }
}
printPrimes(98);

// rock paper sissors
// I don't even know where to start with this....

//const ranMove = () => {
  //  const moveArray = ["rock", "paper", "scissors"];
  //  const ranNum = Math.floor(Math.random() * (moveArray.length))
//} Dont know how to continue
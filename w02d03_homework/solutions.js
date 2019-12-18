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


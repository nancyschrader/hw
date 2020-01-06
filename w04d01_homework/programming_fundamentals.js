// DRY - Just don't repeat yourself if you don't have to. It will save a lot of time
// KISS - Keep it sinple, Stupid! Avoid complexity. Writing less means fewer bugs
// Avoid creating a YAGNI - Only add functionality when you need it. 
// Do the simplest think that could possibly work - Keeping it simple
// Write code for the maintainer - Write code so that the person mainting your code knows what the heck you're doing
// Single responsibility principle - the function should perform a single well defined task
// Avoid premature optimization - Don't think about optimzing til your code is working perfectly (almost)
// Seperation of concerns - Have mininal overlaping in your devided areas that you are working on
// The one that surprised me was seperation of concerns. I always thought you would want to do the opposite of it. 
// The one giving me the most struggle is the one about maintaining. I havent fully worked in that yet in my code. 

// *** Commenting Code ***

// declaring the function
const f = l => {
    //declaring each element in the function
    let es = 0, p = 0, c = 1, n = 0
    //while c is less than or equal to l
    while (c <= l) {
      // n equals c + p
      n = c + p;
      // c and p are equal to n and c
      [c, p] = [n, c]
      //the function of es ... something about add and evens... not sure about the question mark.  
      es += (c % 2 === 0) ? c : 0
    }
    return es
  }
  // print it out when f = 55??? or to 55?
  console.log(f(55))

  // See this one is easier to read for me. Less guessing and the the point. 
  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))

  // I would rather start working on f2, because it is more readable. 
  // SyntaxError: Invalid left-hand side in assignment
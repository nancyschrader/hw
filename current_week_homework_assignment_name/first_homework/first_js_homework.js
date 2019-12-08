// 1. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
// Don't repeat yourself. We should pay attention to it because it takes
// more time to repeat yourself then just putting everything one
// 2. What is the difference between const and let and var?
// const -- statement values can be assigned once and they cannot be reassigned
// let -- statement declares a local variable in a block scope
// var -- statement is used to declare a variable and, optionally, we can initialize the value of that variable.

// Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b);
console.log(c > d);
console.log('name' === 'name');
console.log(a < b || c);
console.log(a <= a || d);
console.log(e !== 'Kevin');
console.log(48 == '48');
console.log(f !== e);
let g = 0;
console.log(g);
g = b + c;
console.log(g);
// 1. I just used let once and I choose that because it seemed like the right answer from what I learned this week. 
// 2. Taking off let wouldnt give you any errors. You are just declaring with out it.... ?
// 3. I got the left hand error thingy... 

// Bonus

console.log(a !== (b || f) || f && e !== c);

// Section 3
// 1. Yes it would continue to loop because there isnt an exit.
// 2. No because there is a exit, = false

// the loop will run as long as i is less than 20
let letters = "A";
let i = 0;
// 
while (i < 20) {
    //assigns A to letters
    letters += "A";
    // increases the value by 1
	i++;
}
// prints out what the value is
console.log(letters);

// I think it will come out as 20 A's, AAAA....
// Once I ran it it did that. 


// Section 4

// 1. For loop will run untill a specific number of times, till it becomes false. 
// a while loop will run indefinitly.
// 2. The first part of the control panel is: initial expression
//    The second part of the control panel is: condition
//    The third part of the control panel is: increment expression

for (let i = 0; i <= 999; i++) {
    console.log(i);
}

// Bonus 1. a forward slash will act as a normal character within a string 
// while a backslash functions as an escape sequence, allowing you to include 
// special characters in a string.

for (let i = 999; i >= 0; i--) {
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    console.log("The value of i is: " + i + " of 10");
}

// Bonus 

for (let i = 0; i <= 10; i++) {
    console.log(`The value of i is: ${i} of 10`);
}

const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i <= starWars.length; i++) {
    console.log(starWars[i]);
}
// for some reason I am getting a undefined at the end
for (let i = 0; i <= starWars.length; i++) {
    console.log(`${starWars[i]} ${i}`);
}
// getting anotherr undefined at the end with a 6 at the end... What am I doing wrong?

// Bonus 

for (let i = 0; i <= starWars.length; i += 2) {
    console.log(starWars[i]);
}
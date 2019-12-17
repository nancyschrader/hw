// Esy Does It

let quotes = ["Love for all, Hatred for none.", "Change the world by being yourself.", "Every moment is a fresh beginning."];

// Random

const randomThings = [1, 10, "Hello", true]

console.log(randomThings[0]);
randomThings[2] = "World"
console.log(randomThings[2]);

// We've Got Class

const ourClass = ["Outrun", "Zoom", "Github", "Slack"]

console.log(ourClass[2]);
ourClass[2] = "Octocat";
ourClass[4] = "Cloud City";
console.log(ourClass);

// Mix it up

const myArray = [5 ,10 ,500, 20];
myArray.push("Egon");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.shift();
console.log(myArray);

// Biggie Smalls

if (myArray < 100) {
    console.log("little number");
}   else {
    console.log("big number");
    }

// Monkey in the Middle

if (myArray < 5) {
    console.log("little number");
}   else if (myArray > 10) {
    console.log("big number");
}   else {
    console.log("monkey");
}

// What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
  kristynsCloset.shift();
  console.log(kristynsCloset);
  let kristynShoe = "left shoe"
  kristynsCloset.splice(5, 0, "raybans");
  console.log(kristynsCloset);
  kristynsCloset[5] = "stained knit hat";
  console.log(kristynsCloset);
  console.log(thomsCloset[0] [0]);
  console.log(thomsCloset[1] [2]);
  console.log(thomsCloset[2] [1]);
  console.log("Thom is looking fierce in a " + thomsCloset[0] [0] +", " + thomsCloset[1] [1] + " and " + thomsCloset[2] [1]) +"!";
  thomsCloset[1] [2] = "Footie Pajamas";
  console.log(thomsCloset);
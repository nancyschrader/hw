/* 
1.A light switch that can be either on or off
datatype: boolean
example: const switch = false
2. A users email address
datatype: string
example: const address = "sample@here.com"
3. A spaceship with a hull, laser blasters, tractor beam, and warp drive
datatype: array
example: spaceship {
    "hull";
    "laser blasters";
    "tractor beam";
    "warp drive";
}
4. A list of students names from our class
datatype: array
example: students{
    "Terry";
    "Laura";
    "Katelan";
    "Jake";
    "Luke";
    "Brittany";
}
5. A list of student names from out class, each with a location
datatype: object
example: students = [
    {name: "Terry"; location: "Dade City"}
    {name:"Laura"; location: "San Antonio"}
    {name:"Katelan"; location: "Chicago"}
    {name:"Jake"; location: "Wesley Chapel"}
    {name:"Luke"; location: "Heaven"}
    {name:"Brittany"; location: "Tampa"}
]
6. A list of student names from our class, each with a location and 
   each with a list of their favorite tv shows. 
datatype: object
example: students = [
    {name: "Terry"; location: "Dade City"; favoriteShow:"Andy Griffths Show"}
    {name:"Laura"; location: "San Antonio"; favoriteShow: "NCIS: New Orleans" }
    {name:"Katelan"; location: "Chicago"; favoriteShow: "Grays Anatomy"}
    {name:"Jake"; location: "Wesley Chapel"; favoriteShow: "Sponge Bob"}
    {name:"Luke"; location: "Heaven"; favoriteShow: "Bonanza"}
    {name:"Brittany"; location: "Tampa"; favoriteShow: "Bachelor"}
]
****TAKE IT EASY*****
*/
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
console.log(rainbow[4]);
var information = {
    name: "Nancy", 
    nickname: "Katelan", 
    favoriteFood: "meatloaf", 
    hobby: "Watercolor", town: "Chicago",
    datatype: "object"
}
console.log(information.hobby);

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }
  console.log(crazyObject.taco[1].salsa[5]);
  console.log(crazyObject.larry.quotes[0]);
  console.log(crazyObject.larry.characters[2].favourtieHobby);
  console.log(crazyObject.larry.nicknames[1]);
  console.log(crazyObject.larry.characters[1]);
  crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk");
  console.log(crazyObject.larry.quotes);
   


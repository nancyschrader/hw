const crayonBox = {
    names: [
        "bittersweet",
        "orange",
        "potter orange",
        "brick",
        "burnt orange"
    ]
}
console.log(crayonBox.names[3]);


var bottle = {
    cap: {
        material: ['metal', 'plastic', 'organic'],
        color: ['green', 'blue', 'orange']
    }
}

console.log(bottle.cap.color[1]);


const receipt = {itemName: "pants", price: 22.50}

console.log(receipt.itemName)

const apartmentBuilding = {
    tenantNames: ["John", "Jacob", "Bill", "Gary"]
}
console.log(apartmentBuilding.tenantNames[1]);

/// Combine objects, arrays, and functions more than one level deep

const knit = {
    item: "scarf",
    size: "6ft"
}
console.log(knit.size);

const crayonSelector = {
    crayonBox
}
console.log(crayonSelector.crayonBox)

const powerButton = {
    options: "Select a Song"
}
console.log(powerButton.options)


/// Vending Machine

const vendingMachine = {
    snacks: [
        {name: "Twinkie", price: 1.00},
        {name: "Chips", price: 1.50},
        {name: "Skittles", price: 2.00},
        {name: "M&Ms", price: 2.00},
    ]
}
//vend (input) {
//    console.log('vending', vendingMachine.snacks[input]);
//}
///vendingMachine.vend(2);
//Not sure how to do this one. I kept getting syntaxerror: unexpected token{

  function add(x, y) {
        return x+y;
    }
    console.log(add(7, 3));
function subtract(x, y) {
    return x-y;
}
console.log(subtract(7,2));

function multiply(x, y){
    return x*y;
}
console.log(multiply(5, 5));

function divide( x, y) {
    return x%y;
}
console.log(divide(2, 10));
//////////
/////////
////////
///bar();
const bar = () => {
    console.log('bar here');
}
bar():
//foo();

const foo = () => {
    console.log('foo here');
}
foo();


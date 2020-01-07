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
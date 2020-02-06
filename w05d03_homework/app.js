//if (typeof jQuery == "undefined") {
  //console.log("oops! I still have to link my jQuery properly!");
//} else {
  //console.log("I did it! I linked jQuery and this js file!");
//}


$(() => {
    const $div = $("container");
    //console.log($div);
    const $h1 = $("<h1>").text( "The Magical World of Hogwarts" );
    //console.log($h1);
    $div.append($h1);
});
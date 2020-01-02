/* You are starting a landscaping business, but all you have are your teeth.
Using just your teeth, you can spend the day cutting lawns and make $1.You can do this as much as you want.
Your prompt should give the user clear choices to “quit”, “use teeth”, or “upgrade” to the next item(if they can afford it). */

let tools = [
    {tool: "teeth", value: 1},
    {tool: "scissors", value: 5, cost: 5},
    {tool: "push mower", value: 50, cost: 25},
    {tool: "power mower", value: 100, cost: 250},
    {tool: "student team", value: 250, cost: 500}
]
let cash = 0;
let i = 0;
function display() {
    document.getElementById("tool").textContent = tools[i].tool;
    document.getElementById("value").textContent = tools[i].value;
    document.getElementById("cash").textContent = cash;
}
display();
document.getElementById("ask").addEventListener("click", function () {
    cutLawn(tools[i]);
});
function cutLawn() {
    cash = cash + tools[i].value;
    display();
    if ((cash >= tools[i+1].cost)) {
        ask();
    };
};

function ask() {
    document.getElementById('upgrade').innerHTML = "Would you like to upgrade?"
    let yes = document.createElement('button');
    var yestext = document.createTextNode('YES');
    yes.appendChild(yestext);
    yes.classList.add('btn', 'yes');
    document.getElementById('buttons').appendChild(yes);
    let no = document.createElement('button');
    var noText = document.createTextNode('NO');
    no.appendChild(noText);
    no.classList.add('btn', 'no');
    document.getElementById('buttons').appendChild(no);
    let quit = document.createElement('button');
    var quitText = document.createTextNode('QUIT');
    quit.appendChild(quitText);
    quit.classList.add('btn', 'quit');
    document.getElementById('buttons').appendChild(quit);

    document.getElementById('buttons').addEventListener('click', function(e) {
        if (e.target.classList.contains('yes')) {
            i++;
            cash -= tools[i].cost;
            display();
            document.getElementById('upgrade').innerHTML = "";
            document.getElementById('buttons').removeChild(yes);
            document.getElementById('buttons').removeChild(no);
            document.getElementById('buttons').removeChild(quit);
        } else if (e.target.classList.contains('quit')){
            endGame();
            document.getElementById('buttons').removeChild(yes);
            document.getElementById('buttons').removeChild(no);
            document.getElementById('buttons').removeChild(quit);
        } else {
            document.getElementById('buttons').removeChild(yes);
            document.getElementById('buttons').removeChild(no);
            document.getElementById('buttons').removeChild(quit);
            return
        }
    })
}
function endGame() {
    document.getElementById('upgrade').innerHTML = "Game over. Thank you for playing.";
    cash = 0;
    i = 0;
    display();
}
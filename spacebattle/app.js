//console.log("It's working!");

// create the USS Schwartz ship object

let ussSchrader = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    // Add methods for battle here
    attack: (enemyShip) => {
        console.log("Player attacking Alien ship!");

        // check for hit success based on ussSchrader accuracy:
        if(Math.random() < ussSchrader.accuracy){
            console.log("attack hit!");
            enemyShip.hull -= ussSchrader.firepower; 
        } else {
            console.log("Attack missed!");
        }
        
        console.log(enemyShip);
    }
        // Calculate chance atack will damage other ship
        // if (Math.random() < alien[0].accuracy) {
	// console.log('You have been hit!');
};
    

//console.log(ussSchrader)
// define an AlienShip class
class AlienShip {
    constructor() {
        //TODO: Make hill random between 3 and 6
        this.hull = Math.floor(Math.random() * 4 + 3);
        // Make random between 2 and 4
        this.firepower = Math.floor(Math.random() * 3 + 2);
        //Make random between .6 and .8
        this.accuracy = Math.floor(Math.random() * 3 + 6) * .01;
    }
    attack() {
        console.log("Alien Ship Attacking");
        //check for hit or miss
        if (Math.random() < this.accuracy) {
            console.log("Alien ship hit you!");
            ussSchrader.hull -= this.firepower;
            console.log(`Your ship hull remaining: ${ussSchrader.hull}`);
        } else {
            console.log("Alien ship missed!");
        }
    }
}

let gameState = {
    playerIsAlive: () => {
        // return true if player is alive
        return ussSchrader.hull > 0;
    },
    checkWin: () => {
        //return true if player has won the game
    }
}

// start the game
console.log("Generating enemy ships");
enemy = new AlienShip();


//for (let i=0; i < 6; i++) {
//    enemies.push(new AlienShip());
//}
// enemy = new AlienShip();
console.log(enemy);


//create checkWin
while (gameState.playerIsAlive()) {
    // player ship attack:
ussSchrader.attack(enemy);

// Turn by turn

// Battle

// If enemy ship is destroyed:
if (enemy.hull <= 0) {
    // if enemy ship is destroyed:
    console.log("Enemy Ship Destroyed!");
    // ask user if they want to continue attacking or retreat?:
    let response = prompt("Ship Destroyed, attack or retreat?");
    // if user retreats:
    if (response === "retreat"){
        // user retreats, end game loop:
        alert("You retreated, game over!");
        break;
}   else if (response === "attack");
        // keep looping.  gameplay continues:
        console.log("Continuing gameplay");
}   else {
    // enemy ship is not destroyed, their turn to attack:
    enemy.attack();
}
}



console.log("Game Over");

// End Game logic
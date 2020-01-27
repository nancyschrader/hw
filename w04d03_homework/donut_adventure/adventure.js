class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShack: 10
    };
    this.catchPhrases = [
      "I'm freasher than a day old pizza",
      "You can't count my caleries"
    ];
  }
  randomNumGenerator(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  talkSass() {
    console.log(
      `${this.name} says`,
      this.catchPhrases[this.randomNumGenerator(this.catchPhrases)]
    );
  }
  announceHealth() {
    console.log(`${this.name}'s current health is at ${this.health}`);
  }
  fight() {
    "I'm ready to rumble";
  }
}

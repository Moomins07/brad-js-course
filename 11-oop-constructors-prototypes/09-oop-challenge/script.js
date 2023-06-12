function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (xp) {
  if (xp <= 10 && xp > 0) {
    this.points += xp;
    if (this.points >= 10) {
      this.lvl++;
      this.points -= 10;
      console.log(this.describe());
    }
  } else console.log(`Xp must be between 1-10`);
};

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points.`;
};

const player1 = new Player('Bob');
const player2 = new Player('John');

player1.gainXp(10);
player2.gainXp(10);
player2.gainXp(10);
player2.gainXp(4);
// console.log(player1.describe());
// console.log(player2.describe());

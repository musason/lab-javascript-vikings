// Soldier
class Soldier {
  constructor(someHealth, someStrength) {
    this.health = someHealth;
    this.strength = someStrength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(someName, someHealth, someStrength) {
    super(someHealth, someStrength);
    this.name = someName;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health !== 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health !== 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let rndViking = Math.floor(Math.random() * this.vikingArmy.length);
    let rndSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    return (rndSaxon.saxon.health =
      rndSaxon.saxon.health - rndViking.viking.strength);
  }
  saxonAttack() {}
  showStatus() {}
}

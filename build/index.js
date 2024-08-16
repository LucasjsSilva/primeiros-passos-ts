"use strict";
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    atack() {
        console.log(`${this.name} atack with ${this.stregth} points`);
    }
}
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Magikarp", 10, 11);
const p2 = new Magician("Patolino", 5, 10, 1000);
console.log(p1);
p1.atack();

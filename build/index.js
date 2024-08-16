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
const p1 = new Character("Magikarp", 10, 11);
console.log(p1);
p1.atack();

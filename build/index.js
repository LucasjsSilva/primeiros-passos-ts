"use strict";
class Character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    atack() {
        console.log(`Atack with ${this.stregth} points`);
    }
}
const p1 = new Character(10, 11);
console.log(p1);
p1.atack();

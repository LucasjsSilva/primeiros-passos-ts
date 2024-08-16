//classes

/**
 * Data modifiers
 * Public(padrao)
 * protect
 * private
 */

class Character {
    public name: string;
    protected stregth: number;
    private skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    atack(): void {
        console.log(`${this.name} atack with ${this.stregth} points`);
    }
}

//superclass: Character
//subclass: Magician

class Magician extends Character {
    magicPoints: number;
    constructor(name: string, stregth: number, skill: number, magicPoints: number) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Magikarp", 10, 11);
const p2 = new Magician("Patolino",5,10,1000)
console.log(p1);
p1.atack();
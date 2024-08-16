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

    constructor(name:string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    atack(): void{
        console.log(`${this.name} atack with ${this.stregth} points`);
    }
}

const p1 = new Character("Magikarp", 10, 11);
console.log(p1);
p1.atack();
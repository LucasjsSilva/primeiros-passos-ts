//interfaces
type robot1 = {
    readonly id: number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
};

const bot1: robot1 = {
    id: "1",
    name: "surge",
}

const bot2: robot2 = {
    id: "2",
    name: "at1000",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

class Pessoa implements robot2{
    id: string | number;
    name: string;
    
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello i am ${this.name}`;
    }
}

const p = new Pessoa(1, "mario");
console.log(p.sayHello());


"use strict";
;
const bot1 = {
    id: "1",
    name: "surge",
};
const bot2 = {
    id: "2",
    name: "at1000",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello i am ${this.name}`;
    }
}
const p = new Pessoa(1, "mario");
console.log(p.sayHello());

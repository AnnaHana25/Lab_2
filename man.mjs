import { Human } from "./human.mjs"

export class Man extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'man')
    }

    greatting() {
        return `hi! i am ${this.name}. i am ${this.age}`
    }
}
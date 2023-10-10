import { Human } from "./human.mjs"

export class Woman extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'woman')
    }

    greatting() {
        return `hi! i am ${this.name}`
    }
}
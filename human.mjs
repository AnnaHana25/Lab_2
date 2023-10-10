export class Human {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }

    getInfo(prop) {
        if (!prop) {
            return this;
        }

        return this[prop];

    }

    greatting() {
        return 'Hi!';
    }
}
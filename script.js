//import { people } from "./people.mjs";
//import { search } from "./search.mjs";

//const nowYear = new Date().getFullYear();

//const greating = (name, birthYear) => {
//    if (birthYear === undefined) {
//        return `Я ${name}.`;
//    }

//  return `Я ${name}. Мені ${nowYear - birthYear}\n`
//}

// console.log(greating('Ann', 2005), greating('Anna'))

// class Human {
//     constructor(name, age, weight, gender) {
//         this.name = name;
//         this.age = age;
//         this.weight = weight;
//         this.gender = gender;
//     }

//     getInfo(prop) { 
//         if (!prop) {
//             return this;
//         }

//         return this[prop];

//     }

//     greatting() {
//         return 'Hi!';
//     }
// }
// const Anna = new Human('Anna', 17, 60, 'woman');


// // console.log(Anna.getInfo(), Anna.getInfo('age'), Anna.greatting())

// class Man extends Human {
//     constructor(name, age, weight) {
//         super(name, age, weight, 'man')
//     }

//     greatting() {
//         return `hi! i am ${this.name}. i am ${this.age}`
//     }
// }

// class Woman extends Human {
//     constructor(name, age, weight) {
//         super(name, age, weight, 'woman')
//     }

//     greatting() {
//         return `hi! i am ${this.name}`
//     }
// }

// const people = [
//     new Man('Igor', 22, 104),
//     new Woman('Anna', 17, 60),
//     new Man('Anton', 40, 90),
// ] 
// const delayTime = 2000;

// const search = (list = people, searchField, searchValue) => {
//     const promise = new Promise(
//         (resolve, reject) => setTimeout(() => {

//             if (!list?.length || !searchField || !searchValue) {
//                 reject('Enter all needed params');
//             }

//             const result = list.filter((person) => person[searchField] === searchValue);

//             if(!result?.length) {
//                 reject('Nothing found')
//             };

//             resolve(result)
//         }, delayTime)
//     );

//     return promise;
// }

search(people, 'name', 'Anna')
search(people, 'age', '20')
search()
search(people, 'age', '100')

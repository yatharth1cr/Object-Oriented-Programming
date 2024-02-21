class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `Welcome ${this.name}`;
  }
}

let personOne = new User("yatharth", 18);
let personTwo = new User("sunny", 19);
console.log(personOne);
console.log(personTwo);

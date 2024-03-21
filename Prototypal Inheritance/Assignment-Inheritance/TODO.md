# Inheritance

Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

```js
let animalMethods = {
  eat: function () {
    return `I live in ${this.location} and I can eat`;
  },
  changeLocation: function (newLocation) {
    return (this.location = newLocation);
  },
  summary: function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};
let animal1 = createAnimal("india", 4);

function createAnimal(location, numberOfLegs = 0) {
  let animalGrp = Object.create(animalMethods);
  animalGrp.location = location;
  animalGrp.numberOfLegs = numberOfLegs;
  return animalGrp;
}

console.group(animal1); // {location: 'india', numberOfLegs: 4}
console.log(animal1.eat()); //I live in india and I can eat
console.log(animal1.summary()); //I live in india and I have 4
console.log(animal1.changeLocation("Canada")); //Canada
console.log(animal1.eat()); //I live in Canada and I can eat
console.log(animal1.summary()); //I live in Canada and I have 4
console.groupEnd();
```

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

```js
let dogMethods = {
  bark: function () {
    console.log(`I am ${this.name} and I can bark 🐶`);
  },
  changeName: function (newName) {
    return (this.name = newName);
  },
  changeColor: function (newColor) {
    return (this.color = newColor);
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

function createDog(name, color) {
  let dog = Object.create(dogMethods);
  dog.name = name;
  dog.color = color;
  return dog;
}

let dog1 = createDog("Pochi", "brown");
console.group(dog1); // {name: 'Pochi', color: 'brown'}
console.log(dog1.bark()); //I am Pochi and I can bark 🐶
console.log(dog1.changeName("Sheru")); //Sheru
console.log(dog1.changeColor("Black")); //Black
console.log(dog1.summary()); //I am Sheru and I am of Black color. I can also bark
console.groupEnd();
```

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

```js
let catMethods = {
  meow: function () {
    console.log(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName: function (newName) {
    return (this.name = newName);
  },
  changeColor: function (newColorOfEyes) {
    return (this.colorOfEyes = newColorOfEyes);
  },
  summary: function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};

function createCat(name, colorOfEyes) {
  let cat = Object.create(catMethods);
  cat.name = name;
  cat.colorOfEyes = colorOfEyes;
  return cat;
}

let cat1 = createCat("pichu", "white");

console.group(cat1); // {name: 'pichu', colorOfEyes: 'white'}
console.log(cat1.meow()); //I am pichu and I can do mewo meow 😹
console.log(cat1.changeName("micky")); //micky
console.log(cat1.changeColor("black")); //black
console.log(cat1.summary()); //I am micky and the color of my eyes are black. I can also do meow meow
console.groupEnd();
```

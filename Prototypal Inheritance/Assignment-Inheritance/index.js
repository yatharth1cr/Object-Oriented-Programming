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

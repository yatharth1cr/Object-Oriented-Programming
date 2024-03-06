# More about class

---

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

```js
class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
  }
}
```

- Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`

```js
 description(width, height) {
    alert(`The square is ${width} * ${height}`);
  }
```

- Create a method inside the class named `calcArea` that will return the area of the square.

```js
 calcArea() {
    const area = this.width * this.width;
    return `${area}`;
  }
```

- Create a `area` getter method using which we can get the area of the square.

```js
  get calcArea() {
    const area = this.width * this.width;
    return `${area}`;
  }
```

- Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`

```js
  set area(areaSquare) {
    const calculatedArea = this.width * this.width;
    if (calculatedArea !== areaSquare) {
      console.log("Not a valid input");
    } else {
      const side = Math.sqrt(areaSquare);
      this.width = `${side}`;
      this.height = `${side}`;
    }
  }
```

- Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.

```js

```

- Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`

```js

```

- Create two instance of the `Square` class

```js

```

- Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.

```js

```

- Check the `isEqual` method and pass the two instance you created above.

```js

```

## User Class

- Create a `User` class that accepts `firstName` and `lastName` property

```js
class User {
  constructor(firstName, lastName) {
    User.firstName = firstName;
    User.lastName = lastName;
  }
}
```

- Create a getter method named `fullName` that will return the full name of the person.

```js
fullName() {
    const name = this.firstName + " " + this.lastName;
    return `${name}`;
  }

```

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

```js

```

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

```js

```

- Create two instance of the `User` class

```js

```

- Check by using the `fullName` setter method with name bigger than 5 characters.

```js

```

- Check by using the `fullName` setter method with name less than 5 characters.

```js

```

- Check the `fullName` using getter

```js

```

- Check the `nameContains` method

```js

```

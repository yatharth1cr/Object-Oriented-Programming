1. **Explain all the different rules given below for getting the value of this inside a function or method. Explain each with multiple examples.**

- ### Default Binding:-

```js
Answer:
when we call a function without bounding to any object then this keyword will represent the window obj
```

- ### Implicit Binding:-

```js

```

- ### Explicit Binding:-

```js

```

- ### new Binding:-

```js

```

- ### this in arrow function:-

```js

```

2. `Output of the following code also write the rule that applies`

```js
let hello = function () {
  console.log(this);
};

let user = {
  name: "Arya",
  sayHello: hello,
};

hello(); // OUTPUT
user.sayHello(); // OUTPUT

let hay = user.sayHello;
hey(); // OUTPUT
```

3. **What all things new keyword does. Explain with example.**

```js

```

4. **What is the difference between `proto` (dunder proto) and `prototype`**

```js

```

5. **What is prototypal nature of object.**

```js

```

6. **Explain what is explicit binding? And how can we use call, bind and apply. Give example for each methods.**

```js

```
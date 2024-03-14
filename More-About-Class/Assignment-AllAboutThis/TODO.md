1. ```js
   console.log(this.document === document); //true
   ```

2. ```js
   console.log(this === window); //true
   ```

3. ```js
   var myFunction = function () {
     console.log(this);
   };
   myFunction(); // window
   ```

4. ```js
   {
     function f1() {
       "use strict";
       return this;
     }
     console.log(f1() === window);
   }
   ```

5. ```js
   function foo() {
     console.log("Simple function call");
     console.log(this === window);
   }
   foo(); // "Simple function call"
   // true;
   ```

6. ```js
   (function () {
     console.log("Anonymous function invocation");
     console.log(this === window);
   })(); // "Anonymous function invocation" , // true
   ```

7. ```js
   var myObject = {};
   myObject.someMethod = function () {
     console.log(this);
   };
   myObject.someMethod(); // {someMethod: ƒ}
   ```

8. ```js
   function Person(fn, ln) {
     this.firstName = fn;
     this.lastName = ln;
     this.displayName = function () {
       console.log(`Name: ${this.firstName} ${this.lastName}`);
     };
   }
   let person = new Person("John", "Reed");
   person.displayName(); //Name: John Reed
   let person2 = new Person("Paul", "Adams");
   person2.displayName(); // Name: Paul Adams
   ```

9. ```js
   function foo() {
     "use strict";
     console.log("Simple function call");
     console.log(this === window);
   }
   let user = {
     count: 10,
     foo: foo,
     foo1: function () {
       console.log(this === window);
     },
   };
   user.foo(); //false
   let fun1 = user.foo1;
   fun1(); //true
   user.foo1(); //false
   ```

10. ```js
    this.x = 9;
    var obj = {
      x: 81,
      getX: function () {
        console.log(this.x);
      },
    };

    obj.getX(); //81
    var retrieveX = obj.getX;
    retrieveX(); //9

    var boundGetX = retrieveX.bind(obj);
    boundGetX(); //81
    ```

11. ```js
    function Person(fn, ln) {
      this.firstName = fn;
      this.lastName = ln;
      this.displayName = function () {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
      };
    }
    let person = new Person("John", "Reed");
    person.displayName();
    let person2 = new Person("Paul", "Adams");
    person2.displayName();
    person.displayName.call(person2);
    ```

12. ```js
    const a = {
      a: "a",
    };
    const obj = {
      getThis: () => this,
      getThis2() {
        return this;
      },
    };
    obj.getThis3 = obj.getThis.bind(obj);
    obj.getThis4 = obj.getThis2.bind(obj);
    console.log(obj);
    console.log(obj.getThis()); //widow
    console.log(obj.getThis.call(a)); //window
    console.log(obj.getThis2()); //obj
    console.log(obj.getThis2.call(a)); //a
    console.log(obj.getThis3()); //window
    console.log(obj.getThis4()); //obj
    ```

13. ```js
    let person = {
      name: "Jay",
      greet: function () {
        console.log("hello, " + this.name);
      },
    };
    person.greet(); //hello, Jay
    let greet = person.greet;
    greet(); // hello, [bcz,this represent the window]
    ```

14. ```js
    let name = "Jay Global";
    let person = {
      name: "Jay Person",
      details: {
        name: "Jay Details",
        print: function () {
          return this.name;
        },
      },
      print: function () {
        return this.name;
      },
    };
    console.log(person.details.print()); //Jay Details
    console.log(person.print()); //Jay Person
    let name1 = person.print;
    let name2 = person.details;
    console.log(name1()); //window "[bcz,this represent the window]"
    console.log(name2.print()); //Jay Details
    ```

15. ```js
    let outerFn = function () {
      let n = 5;
      console.log(innerItem);
      let innerFn = function () {
        let innerItem = "inner";
        console.log(n);
      };
      return innerFn;
    };
    outerFn()(); //inner item is not defined at outerFn
    ```

16. ```js
    let object = {
      data: [1, 2, 3],
      dataDouble: [1, 2, 3],
      double: function () {
        console.log("this inside of outerFn double()");
        console.log(this);
        return this.data.map(function (item) {
          console.log(this);
          return item * 2;
        });
      },
      doubleArrow: function () {
        console.log("this inside of outerFn doubleArrow()");
        console.log(this);
        return this.dataDouble.map((item) => {
          console.log(this);
          return item * 2;
        });
      },
    };
    object.double();
    // output
    // "this inside of outerFn double()"
    // obj
    //window
    object.doubleArrow();
    // output
    // this inside of outerFn doubleArrow()"
    // object
    ```

17. ```js
    let bobObj = {
      name: "Bob",
    };
    function print() {
      return this.name;
    }
    let printNameBob = print.bind(bobObj);
    console.log(printNameBob()); //"Bob"
    ```

18. ```js
    let obj1 = {
      data: [1, 2, 3],
      printFirstData: function () {
        if (this.data.length) return this.data[0];
      },
    };
    let obj2 = {
      data: [4, 5, 6],
      printSecondData: function () {
        if (this.data.length > 1) return this.data[1];
      },
    };
    let getSecondData = obj2.printSecondData.bind(obj1);
    console.log(getSecondData()); //2
    ```

19. ```js
    const call = {
      caller: "mom",
      says: function () {
        console.log(`Hey, ${this.caller} just called.`);
      },
    };
    call.says(); //`Hey, mom just called.`
    ```

20. ```js
    function anotherCaller() {
      console.log(`${this.caller} called, too!`);
    }
    const call = {
      caller: "mom",
      anotherCaller: anotherCaller,
      says: function () {
        console.log(`Hey, ${this.caller} just called.`);
      },
    };
    let newCall = call.anotherCaller;
    newCall(); //undefined called, too!
    ```

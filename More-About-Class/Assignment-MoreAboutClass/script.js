class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(name) {
    if (name.length < 5) {
      console.log("Full name should be more than 5 characters");
    } else {
      const a = name.split(" ");
      this.firstName = a[0];
      this.lastName = a[1];
    }
  }
  nameContain(str) {
    return this.fullName.includes(str);
  }
}
let user1 = new User("Yatharth", "Giri");
console.group("user1");
console.log(user1);
console.log((user1.fullName = "Shubham Kumar"));
console.log(user1.fullName);
console.log(user1.nameContain("a"));
console.groupEnd();

let user2 = new User("Anish", "kumar");
console.group("user2");
console.log(user2);
console.log((user2.fullName = "Ansh"));
console.log(user2.fullName);
console.log(user2.nameContain("z"));
console.groupEnd();

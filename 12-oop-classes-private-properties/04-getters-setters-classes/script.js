class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this.capitaliseFirst(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitaliseFirst(value);
  }

  get lastName() {
    return this.capitaliseFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitaliseFirst(value);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  capitaliseFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('john', 'doe');

person1.firstName = 'johnny';
person1.lastName = 'doe';
console.log(person1.fullName);

function Rectangle(name, height, width) {
  this.name = name;
  this.height = height;
  this.width = width;
  this.area = function () {
    return this.height * this.width;
  };
}

Rectangle.prototype.area = function () {
  return this.height * this.width;
};

const rect1 = new Rectangle('Rectangle 1', 30, 20);
const rect2 = new Rectangle('Rectangle 2', 10, 10);

console.log(rect1.name);
console.log(rect1.area());
console.log(rect2.name);
console.log(rect2.area());

// 4 step process from 'new' keyword
// 1. A new empty object is created
// 2. The constructor function is called with the arguments that we passed in.
// 3. The 'this' keyword is assigned to the new empty object.
// 4. The new object is returned from the constructor function

console.log(rect1.constructor);
console.log(rect2 instanceof Rectangle);

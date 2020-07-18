let shape = {
type: "model",
getType() {
    console.log("This is a shape");
}
};

function Triangle(a, b, c) {
    this.side1 = a;
    this.side2 = b;
    this.side3 = c;
}

Triangle.prototype.getPerimeter = function() {
    console.log(this.side1 + this.side2 + this.side3);
}
//test done using the code below
let t = new Triangle(1, 2, 3);
t.constructor === Triangle;
shape.isPrototypeOf(t);
t.getPerimeter();
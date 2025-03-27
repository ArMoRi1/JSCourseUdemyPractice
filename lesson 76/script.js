'use strict';

class Rectangle {
	constructor(height, width){
		this.height = height;
		this.width = width;
	}

	calcArea(){
		return this.height * this.width;	
	}
}

class ColoredRectangleWithText extends Rectangle{
	constructor(height, width, text, bgColor){
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyProps(){
		console.log(`Text :: ${this.text}; \nColor :: ${this.bgColor}`);
	}
}
const square = new Rectangle(10,10);
const long = new Rectangle(100, 10);

const div = new ColoredRectangleWithText(25, 15, 'Ira', 'pink');

div.showMyProps();
console.log(div.calcArea());

// console.log(square.calcArea());
// console.log(long.calcArea());
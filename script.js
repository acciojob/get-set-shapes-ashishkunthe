//complete this code
class Rectangle {
	constructor(width:number,height:number){
		this.height=height
		this.width=width
	}
	getArea(){
		return this.height*this.width
	}
}

class Square extends Rectangle {
	constructor(side:number){
		super(side, side)
		this.side=side
		
	}

	getArea(){
		return this.side*this.side
	}

	getPerimeter(){
		return 4*this.side
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

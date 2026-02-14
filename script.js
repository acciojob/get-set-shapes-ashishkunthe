//complete this code
class Rectangle {
	width:number
	height:number
	constructor(width:number,height:number){
		this.height=height
		this.width=width
	}

	get width(){
		return this._width
	}
	get height(){
		return this._height
	}
	
	getArea(){
		return this.height*this.width
	}
}

class Square extends Rectangle {
	side:number
	constructor(side:number){
		super(side, side)
	}

	getPerimeter(){
		return 4*this.width
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

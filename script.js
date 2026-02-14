//complete this code
class Rectangle {
	private _width:number
	private _height:number
	constructor(width:number,height:number){
		this._height=height
		this._width=width
	}

	get width(){
		return this._width
	}
	get height(){
		return this._height
	}
	
	getArea(){
		return this._height*this._width
	}
}

class Square extends Rectangle {
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

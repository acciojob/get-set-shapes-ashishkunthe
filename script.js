//complete this code
class Rectangle {
	constructor(width:number,height:number){
		height=this.height
		width=this.width
	}
	getArea(){
		return height*width
	}
}

class Square extends Rectangle {
	constructor(side:number){
		side=this.side
		width=this.side
		height=this.side
	}

	getArea(){
		return side*side;
	}

	getPerimeter(){
		return 4*side
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

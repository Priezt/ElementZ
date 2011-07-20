function Stand(){
	this.x = Math.random() * conf.width;
	this.y = Math.random() * conf.height;
	this.direction = 360 * Math.random();
	this.color = "#0F0";
	this.radius = 8;
	this.draw = _stand_draw;
}
Avatar.prototype = new Entity();

function _stand_draw(c){
	c.beginPath();
	c.moveTo(0, -8);
	c.lineTo(5, 0);
	c.lineTo(5, 8);
	c.lineTo(-5, 8);
	c.lineTo(-5, 0);
	c.closePath();
	c.stroke();
}

function Avatar(){
	this.x = conf.width / 2;
	this.y = conf.height * 0.75;
	this.direction = 0;
	this.color = "#0F0";
	this.radius = 10;
	this.draw = function(c){
		c.beginPath();
		c.moveTo(10, 0);
		c.lineTo(10, 10);
		c.lineTo(3, 10);
		c.lineTo(3, 5);
		c.lineTo(-3, 5);
		c.lineTo(-3, 10);
		c.lineTo(-10, 10);
		c.lineTo(-10, 0);
		c.lineTo(0, -10);
		c.closePath();
		c.stroke();
	};
}
Avatar.prototype = new Entity();


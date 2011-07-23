function Stand(){
	this.x = Math.random() * conf.width;
	this.y = Math.random() * conf.height;
	this.direction = 360 * Math.random();
	this.color = "#0F0";
	this.radius = 8;
	this.speed = 10;
	this.draw = _stand_draw;
	this.move = _stand_move;
	this.forward = _stand_forward;
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

function _stand_move(x, y){
	if(this.x == x && this.y == y){
		return;
	}
	this.direction = get_direction(y - this.y, x - this.x);
	var dist_square = Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2);
	if(dist_square <= Math.pow(this.speed, 2)){
		this.x = x;
		this.y = y;
		return;
	}
	var ang = this.direction * Math.PI / 180;
	this.x += this.speed * Math.sin(ang);
	this.y -= this.speed * Math.cos(ang);
}

function _stand_forward(){
	if(this.x == mouseX && this.y == mouseY){
		this.direction = Math.random() * 360;
	}else{
		this.direction = get_direction(this.y - mouseY, this.x - mouseX);
	}
	var ang = this.direction * Math.PI / 180;
	this.x += this.speed * Math.sin(ang);
	this.y -= this.speed * Math.cos(ang);
}


function draw_avatar(c){
	c.save();
	c.strokeStyle = avatar.color;
	c.translate(avatar.x, avatar.y);
	c.rotate(Math.PI * avatar.direction / 180);
	avatar.draw(c);
	c.restore();
}

function draw_stands(c){
	for(var i=0;i<stands.length;i++){
		c.save();
		c.strokeStyle = stands[i].color;
		c.translate(stands[i].x, stands[i].y);
		c.rotate(Math.PI * stands[i].direction / 180);
		stands[i].draw(c);
		c.restore();
	}
}

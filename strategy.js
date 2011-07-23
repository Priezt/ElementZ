function Strategy(){
	this.run = function(){};
}

function StrategyCircle(){
	this.radius = 50;
	this.run = function(){
		for(var i=0;i<stands.length;i++){
			var targetX;
			var targetY;
			targetX = mouseX + this.radius * Math.sin(Math.PI * 2 * i / stands.length);
			targetY = mouseY - this.radius * Math.cos(Math.PI * 2 * i / stands.length);
			stands[i].move(targetX, targetY);
			stands[i].direction = get_direction(targetY - mouseY, targetX - mouseX);
		}
	};
}
StrategyCircle.prototype = new Strategy();

function StrategyLine(){
	this.length = 150;
	this.run = function(){
		for(var i=0;i<stands.length;i++){
			var targetX;
			var targetY;
			targetX = mouseX - this.length / 2 + (this.length / (stands.length - 1)) * i;
			targetY = mouseY;
			stands[i].move(targetX, targetY);
			stands[i].direction = 0;
		}
	};
}
StrategyLine.prototype = new Strategy();

function StrategyStop(){
	this.run = function(){};
}
StrategyStop.prototype = new Strategy();

function StrategyAssemble(){
	this.run = function(){
		for(var i=0;i<stands.length;i++){
			stands[i].move(mouseX, mouseY);
		}
	};
}
StrategyAssemble.prototype = new Strategy();

function StrategyDisperse(){
	this.run = function(){
		for(var i=0;i<stands.length;i++){
			stands[i].forward();
		}
	};
}
StrategyDisperse.prototype = new Strategy();


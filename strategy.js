function Strategy(){
	this.run = function(){};
}

function StrategyCircle(){
	this.run = function(){
	};
}
StrategyCircle.prototype = new Strategy();

function StrategyNop(){
	this.run = function(){};
}
StrategyNop.prototype = new Strategy();

function StrategyAssemble(){
	this.run = function(){
		//console.log("here");
		for(var i=0;i<stands.length;i++){
			stands[i].move(mouseX, mouseY);
		}
	};
}
StrategyAssemble.prototype = new Strategy();

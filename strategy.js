function Strategy(){
}

function StrategyCircle(){
}
StrategyCircle.prototype = new Strategy();

function StrategyNop(){
}
StrategyNop.prototype = new Strategy();

function update_strategy(){
	if(pendingStrategy){
		currentStrategy = pendingStrategy;
	}
	//console.log("run strategy");
	currentStrategy.run();
}

function update_mouse_position(){
	mouseX = pendingMouseX;
	mouseY = pendingMouseY;
}

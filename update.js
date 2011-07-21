function update_avatar_position(){
	if(moveLeftFlag){
		avatar.x -= AVATAR_SPEED;
	}
	if(moveRightFlag){
		avatar.x += AVATAR_SPEED;
	}
	if(moveUpFlag){
		avatar.y -= AVATAR_SPEED;
	}
	if(moveDownFlag){
		avatar.y += AVATAR_SPEED;
	}
	moveLeftFlag = false;
	moveRightFlag = false;
	moveUpFlag = false;
	moveDownFlag = false;
}

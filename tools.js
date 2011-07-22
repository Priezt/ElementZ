function get_direction(dy, dx){
	var ang = -Math.atan2(-dx, -dy) * 180 / Math.PI;
	return ang;
}


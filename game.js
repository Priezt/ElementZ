var conf = {};
var avatar;
var STAND_COUNT = 10;
var AVATAR_SPEED = 5;
var stands = new Array();
var currentStrategy;
var moveLeftFlag = false;
var moveRightFlag = false;
var moveUpFlag = false;
var moveDownFlag = false;
var pendingStrategy;
$(init);

function load_conf(){
	conf.width = 800;
	conf.height = 600;
}

function load_strategy(){
	currentStrategy = new StrategyNop();
	pendingStrategy = null;
}

function init(){
	load_conf();
	load_entities();
	load_strategy();
	$("#drawing_board").attr("width", conf.width);
	$("#drawing_board").attr("height", conf.height);
	$("body").keypress(on_key_press);
	tick();
}

function on_key_press(event){
	var charCode = event.which;
	console.log("press: " + charCode);
	if(charCode == 97){
		moveLeftFlag = true;
	}else if(charCode == 100){
		moveRightFlag = true;
	}else if(charCode == 119){
		moveUpFlag = true;
	}else if(charCode == 115){
		moveDownFlag = true;
	}
}

function load_entities(){
	avatar = new Avatar();
	for(var c=0;c<STAND_COUNT;c++){
		stands.push(new Stand());
	}
}

function tick(){
	update();
	draw();
	window.setTimeout("tick()", 100);
}

function update(){
	update_avatar_position();
}

function draw(){
	var c = $("#drawing_board")[0].getContext("2d");
	clear(c);
	draw_avatar(c);
	draw_stands(c);
}

function clear(c){
	c.save();
	c.fillStyle = "#000";
	c.fillRect(0, 0, conf.width, conf.height);
	c.restore();
}

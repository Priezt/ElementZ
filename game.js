var conf = {};
var avatar;
var STAND_COUNT = 10;
var AVATAR_SPEED = 5;
var CANVAS_BORDER_WIDTH = 5;
var stands = new Array();
var currentStrategy;
var pendingStrategy;
var pendingMouseX;
var pendingMouseY;
var mouseX;
var mouseY;
$(init);

function load_conf(){
	conf.width = 800;
	conf.height = 600;
}

function load_strategy(){
	currentStrategy = new StrategyNop();
	pendingStrategy = null;
}

function init_pending_mouse_position(){
	pendingMouseX = conf.width / 2;
	pendingMouseY = conf.height / 2;
}

function init(){
	load_conf();
	load_entities();
	load_strategy();
	init_pending_mouse_position();
	$("#drawing_board").attr("width", conf.width);
	$("#drawing_board").attr("height", conf.height);
	$("#drawing_board").mousemove(function(e){
		//console.log(e.offsetX + "," + e.offsetY);
		pendingMouseX = e.offsetX - CANVAS_BORDER_WIDTH;
		pendingMouseY = e.offsetY - CANVAS_BORDER_WIDTH;
	});
	$("body").keypress(on_key_press);
	tick();
}

function on_key_press(event){
	var charCode = event.which;
	console.log("press: " + charCode);
	if(charCode == 97){//a
		currentStrategy = new StrategyAssemble();
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
	window.setTimeout("tick()", 50);
}

function update(){
	update_mouse_position();
	update_strategy();
}

function draw(){
	var c = $("#drawing_board")[0].getContext("2d");
	clear(c);
	draw_avatar(c);
	draw_stands(c);
	//draw_cursor(c);
}

function clear(c){
	c.save();
	c.fillStyle = "#000";
	c.fillRect(0, 0, conf.width, conf.height);
	c.restore();
}

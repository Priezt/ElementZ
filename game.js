var conf = {};
var avatar;
var STAND_COUNT = 10;
var stands = new Array();
$(init);

function load_conf(){
	conf.width = 800;
	conf.height = 600;
}

function init(){
	load_conf();
	load_entities();
	$("#drawing_board").attr("width", conf.width);
	$("#drawing_board").attr("height", conf.height);
	tick();
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


var borad = new Array();
var test = new Array();
var score = 0;

$(function(){
	newgame();
});

function newgame(){
	//初始化棋盘格
	init();
	
	generateOneNumber();
	generateOneNumber();
}

function init(){
	//定义二维数组 
	for(var i = 0; i < 4; i++){
		borad[i] = new Array();
		test[i] = new Array();
		for(var j = 0;j < 4; j++){
			borad[i][j] = 0;
			//test[i][j] = false;
			var gridcell = $("#grid-cell-"+i+"-"+j);
			gridcell.css("top", getPosTop(i,j));
			gridcell.css("left", getPosLeft(i,j));
		}
	}
	score = 0;
	$("#score").text(0);
	updateBoradView();
}

function updateBoradView(){
	$(".number-cell").remove();
	for(var i = 0; i < 4 ;i++){
		for(var j = 0; j < 4 ; j++){
			test[i][j] = false;
			$("#grid-cintianer").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
			var numberCell = $("#number-cell-"+i+"-"+j);
			if(borad[i][j] == 0){
				numberCell.css("width","0px");
				numberCell.css("height", "0px");
				numberCell.css("top", getPosTop(i, j)+50);
				numberCell.css("left", getPosLeft(i, j)+50);
			}
			else{
				numberCell.css("width","100px");
				numberCell.css("height", "100px");
				numberCell.css("top", getPosTop(i, j));
				numberCell.css("left", getPosLeft(i, j));
				numberCell.css("background-color", getNumberBackgroundColor(borad[i][j]));
				numberCell.css("color", getNumberColor(borad[i][j]));
				numberCell.text(borad[i][j]);
			}
		}
	}
}

function generateOneNumber(){
	//生成随机位置
	var randx = parseInt(Math.floor(Math.random() * 4));
	var randy = parseInt(Math.floor(Math.random() * 4));
	while(true){
		if(borad[randx][randy] == 0){
			break;
		}
		var randx = parseInt(Math.floor(Math.random()*4));
		var randy = parseInt(Math.floor(Math.random()*4));
	}
	//生成随机数字(生成的不是2 就是4)
	var randNumber = Math.random() < 0.5 ? 2 : 4;
	borad[randx][randy] = randNumber;
	//在随机位置上显示随机数字
	showNumberWithAnimation(randx, randy, randNumber);
}

function restartgame(){
	$("#gameover").remove();
	document.getElementById("success").style.visibility="hidden";
	newgame();
}





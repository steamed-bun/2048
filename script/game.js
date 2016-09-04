$(document).keydown(function(event){
	if(!isSuccess(borad)){
		switch(event.keyCode){
			case 37://left	
				if(moveLeft()){
					generateOneNumber();
					isGameOver();
				}
				break;
			case 38://up
				if(moveUp()){
					generateOneNumber();
					isGameOver();
				}
				break;
			case 39://right
				if(moveRight()){
					generateOneNumber();
					isGameOver();
				}
				break;
			case 40://down
				if(moveDown()){
					generateOneNumber();
					isGameOver();
				}
				break;
		}
	}
});

function moveLeft(){
	if(!canMoveLeft(borad)){
		return false;
	}
	for(var i =  0; i < 4; i++){
		//由于第一列是不能向左移动的故j从1开始
		for(var j = 1; j < 4 ; j++){
			if(borad[i][j] != 0){
				//为了判断（遍历）当前有值的格子左边格子 而新建的变量
				for(var k = 0 ; k < j ; k++){
					if(borad[i][k] == 0 && noBlakHorzontalCol(i,j,k,borad)){
						//将当前格子移到borad[i][k]
						showMoveAnimation(i,j,i,k);
						borad[i][k] = borad[i][j];
						borad[i][j] = 0;
					}else if(borad[i][k] == borad[i][j] && noBlakHorzontalCol(i, j, k, borad) && !test[i][k]){
						//将当前格子移到borad[i][k] 并将值翻倍
						showMoveAnimation(i,j,i,k);
						borad[i][k] += borad[i][j];
						test[i][k] = true;
						score += borad[i][k];
						updateScore(score);
						borad[i][j] = 0;
					}
				}
			}
		}
	}
	updateBoradView();
	return true;
}

function moveRight(){
	if(!canMoveRight(borad)){
		return false;
	}
	for(var i = 0; i < 4 ; i++){
		for(var j = 2 ; j >= 0 ; j--){
			if(borad[i][j] != 0){
				for(var k = 3 ;k > j ; k-- ){
					if(borad[i][k] == 0 && noBlakHorzontalCol(i, k, j, borad)){
						showMoveAnimation(i, j, i, k);
						borad[i][k] = borad[i][j];
						borad[i][j] = 0;
					}else if(borad[i][k] == borad[i][j] && noBlakHorzontalCol(i, k, j, borad) && !test[i][k]){
						showMoveAnimation(i, j, i, k);
						borad[i][k] += borad[i][j];
						test[i][k] = true;
						score += borad[i][k];
						updateScore(score);
						borad[i][j] = 0;
					}
				}
			}
		}
	}
	updateBoradView();
	return true;
}

function moveUp(){
	if(!canMoveUp(borad)){
		return false;
	}
	for(var i = 1; i < 4 ; i++){
		for(var j = 0 ; j < 4 ; j++){
			if(borad[i][j] != 0){
				for(var k = 0 ;k < i ; k++ ){
					if(borad[k][j] == 0 && noBlakUprightCol(i, j, k, borad)){
						showMoveAnimation(i, j, k, j);
						borad[k][j] = borad[i][j];
						borad[i][j] = 0;
					}else if(borad[k][j] == borad[i][j] && noBlakUprightCol(i, j, k, borad) && !test[k][j]){
						showMoveAnimation(i, j, k, j);
						borad[k][j] += borad[i][j];
						test[k][j] = true; 
						score += borad[k][j];
						updateScore(score);
						borad[i][j] = 0;
					}
				}
			}
		}
	}
	updateBoradView();
	return true;
}

function moveDown(){
	if(!canMoveDown(borad)){
		return false;
	}
	for(var i = 2; i >= 0 ; i--){
		for(var j = 0 ; j < 4 ; j++){
			if(borad[i][j] != 0){
				for(var k = 3 ;k > i ; k-- ){
					if(borad[k][j] == 0 && noBlakUprightCol(k, j, i, borad)){
						showMoveAnimation(i, j, k, j);
						borad[k][j] = borad[i][j];
						borad[i][j] = 0;
					}else if(borad[k][j] == borad[i][j] && noBlakUprightCol(k, j, i, borad) && !test[k][j]){
						showMoveAnimation(i, j, k, j);
						borad[k][j] += borad[i][j];
						test[k][j] = true;
						score += borad[k][j];
						updateScore(score);
						borad[i][j] = 0;
					}
				}
			}
		}
	}
	updateBoradView();
	return true;
}

function isGameOver(){
	if(noSpace(borad) && noMove(borad)){
		gameOver();
	}
}
function gameOver(){
	$("#grid-cintianer").append("<div id='gameover' class='gameover'>" +
			"<p>本次得分</p><span>"+score+"</span>" +
			"<span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></span></div>");
	var gameover = $("#gameover");
	gameover.css("width", "500px");
	gameover.css("height","500px");
	gameover.css("background-color","rgba(0,0,0,0.5)");
}

function isSuccess(borad){
	for(var i = 0; i < 4;i++){
		for(var j = 0;j < 4;j++){
			if(borad[i][j] == 2048){
				success();
				return true;
			}
		}
	}
	return false;
}
	
function success(){
	document.getElementById("success").style.visibility="visible";
	$("#score2").text(score);
}
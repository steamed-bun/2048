function getPosTop(i,j ){
	return 20+120*i;
}

function getPosLeft(i,j){
	return 20+120*j;
}

function getNumberBackgroundColor(number){
	switch (number) {
    case 2:return "#edf";break;
    case 4:return "#eee";break;
    case 8:return "#f2b179";break;
    case 16:return "#f59563";break;
    case 32:return "#f67c5f";break;
    case 64:return "#f65e3b";break;
    case 128:return "#edcf72";break;
    case 256:return "#edcc61";break;
    case 512:return "#9c0";break;
    case 1024:return "#33b5e5";break;
    case 2048:return "#09c";break;
    case 4096:return "#a6c";break;
    case 8192:return "#93c";break;
	}
}

function getNumberColor(number){
    if (number < 4) {
        return "#555"
    }
    return "#555";
}

function canMoveLeft(borad){
	for(var i=0; i<4; i++){
		for(var j=1; j<4; j++){
			if(borad[i][j] != 0){
				if(borad[i][j-1] == 0 || borad[i][j-1] == borad[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveRight(borad){
	for(var i=0; i<4; i++){
		for(var j=0; j<3; j++){
			if(borad[i][j] != 0){
				if(borad[i][j+1] == 0 || borad[i][j+1] == borad[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveUp(borad){
	for(var i = 1; i < 4 ; i++){
		for(var j=0; j < 4 ; j++){
			if(borad[i][j] != 0){
				if(borad[i-1][j] == 0 || borad[i-1][j] == borad[i][j] ){
					return true;
				}
			}
			
		}
	}
	return false;
}

function canMoveDown(borad){
	for(var i = 0; i < 3 ; i++){
		for(var j=0; j < 4 ; j++){
			if(borad[i][j] != 0){
				if(borad[i+1][j] == 0 || borad[i+1][j] == borad[i][j] ){
					return true;
				}
			}
			
		}
	}
	return false;
}

//同一水平线上没有障碍物  即指定格子与当前格子之间的格子都为空0
function noBlakHorzontalCol(i,j,k,borad){
	for(var col = k+1; col < j; col++ ){
		if(borad[i][col] != 0){
			return false;
		}
	}
	return true;
}
//同一竖直线上没有障碍物  即指定格子与当前格子之间的格子都为空0
function noBlakUprightCol(i,j,k,borad){
	for(var col = k+1; col < i; col++ ){
		if(borad[col][j] != 0){
			return false;
		}
	}
	return true;
}
function updateScore(score){
	$("#score").text(score);
	
}
function noSpace(borad){
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4 ; j++){
			if(borad[i][j] == 0){
				return false;
			} 
		}
	}
	return true;
}

function noMove(borad){
	if(canMoveLeft(borad) || canMoveRight(borad) || canMoveUp(borad) || canMoveDown(borad)){
		return false;
	}
	return true;
}

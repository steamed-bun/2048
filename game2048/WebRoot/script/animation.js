function showNumberWithAnimation(randx,randy,randNumber){
	var numberCell = $("#number-cell-"+randx+"-"+randy);
	numberCell.css("background-color", getNumberBackgroundColor(randNumber));
	numberCell.css("color", getNumberColor(randNumber));
	numberCell.text(randNumber);
	numberCell.animate({
		width: "100px",
		height: "100px",
		top: getPosTop(randx, randy),
		left: getPosLeft(randx, randy)
			
	},50);
}

/* 
 * 实现将当前格子移到到指定格子?
 * 实际上就是将当前格子的位置移到指定格子的位置
 */  
function showMoveAnimation(fromx,fromy,tox,toy){
	var numberCell = $("#number-cell-"+fromx+"-"+fromy);
	numberCell.animate({
		top: getPosTop(tox,toy),
		left: getPosLeft(tox, toy)
	},200)
}
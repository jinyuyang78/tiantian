function $Ad(id) { return document.getElementById(id); }

function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function addBtn() {
	if(!$Ad('ibanner')||!$Ad('ibanner_pic')) return;
	var picList = $Ad('ibanner_pic').getElementsByTagName('a');
	if(picList.length==0) return;
	var btnBox = document.createElement('div');
	btnBox.setAttribute('id','ibanner_btn');
	var SpanBox ='';
	for(var i=1; i<=picList.length; i++ ) {
		var spanList = '<span class="normal">'+i+'</span>';
		SpanBox += spanList;
	}
	btnBox.innerHTML = SpanBox;
	$Ad('ibanner').appendChild(btnBox);
	$Ad('ibanner_btn').getElementsByTagName('span')[0].className = 'current';
	for (var m=0; m<picList.length; m++){
		var attributeValue = 'picLi_'+m
		picList[m].setAttribute('id',attributeValue);
	}
}

function moveElement(elementID,final_x,final_y,interval) {
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if (!elem.style.left) {
		elem.style.left = "0px";
	}
	if (!elem.style.top) {
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) {
		moveing = false;
		return true;
	}
  if (xpos < final_x) {
    var dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > final_x) {
    var dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist;
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos > final_y) {
    var dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist;
  }
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat,interval);
}

function classNormal() {
	var btnList = $Ad('ibanner_btn').getElementsByTagName('span');
	for (var i=0; i<btnList.length; i++){
		btnList[i].className='normal';
	}
}

function picZ() {
	var picList = $Ad('ibanner_pic').getElementsByTagName('a');
	for (var i=0; i<picList.length; i++){
		picList[i].style.zIndex='1';
	}
}

var autoKey = false;
function iBanner() {
	if(!$Ad('ibanner')||!$Ad('ibanner_pic')||!$Ad('ibanner_btn')) return;
	$Ad('ibanner').onmouseover = function(){autoKey = true};
	$Ad('ibanner').onmouseout = function(){autoKey = false};
	var btnList = $Ad('ibanner_btn').getElementsByTagName('span');
	var picList = $Ad('ibanner_pic').getElementsByTagName('a');
	if (picList.length==1) return;
	picList[0].style.zIndex='2';
	for (var m=0; m<btnList.length; m++){
		btnList[m].onmouseover = function() {
			for(var n=0; n<btnList.length; n++) {
				if (btnList[n].className == 'current') {
					var currentNum = n;
				}
			}
			classNormal();
			picZ();
			this.className='current';
			picList[currentNum].style.zIndex='2';
			var z = this.childNodes[0].nodeValue-1;
			picList[z].style.zIndex='3';
			if (currentNum!=z){
				picList[z].style.left='270px';
				moveElement('picLi_'+z,0,0,10);
			}
		}
	}	
}

setInterval('autoBanner()', 5000);
function autoBanner() {
	if(!$Ad('ibanner')||!$Ad('ibanner_pic')||!$Ad('ibanner_btn')||autoKey) return;
	var btnList = $Ad('ibanner_btn').getElementsByTagName('span');
	var picList = $Ad('ibanner_pic').getElementsByTagName('a');
	if (picList.length==1) return;
	for(var i=0; i<btnList.length; i++) {
		if (btnList[i].className == 'current') {
			var currentNum = i;
		}
	}
	if (currentNum==(picList.length-1) ){
		classNormal();
		picZ();
		btnList[0].className='current';
		picList[currentNum].style.zIndex='2';
		picList[0].style.zIndex='3';
		picList[0].style.left='270px';
		moveElement('picLi_0',0,0,10);
	} else {
		classNormal();
		picZ();
		var nextNum = currentNum+1;
		btnList[nextNum].className='current';
		picList[currentNum].style.zIndex='2';
		picList[nextNum].style.zIndex='3';
		picList[nextNum].style.left='270px';
		moveElement('picLi_'+nextNum,0,0,10);
	}

}

$(function(){
		var wowo = $('.nav .nav_left ul li .wo');
	var yinchangww = $('.nav .nav_left ul li .yinchangww');
	var em = $('.nav .nav_left ul li .wo em');
	wowo.hover(function(){
		yinchangww.show();
		em.addClass('active');
		wowo.addClass('active');
	},function(){
		yinchangww.hide();
		em.removeClass('active');
		wowo.removeClass('active');
	});
	yinchangww.hover(function(){
		yinchangww.show();
		em.addClass('active');
		wowo.addClass('active');
	},function(){
		yinchangww.hide();
		wowo.removeClass('active');
		em.removeClass('active');
	});
	// lt
	var lt = $('.nav .nav_left ul li .lt');
	var yinchanglt = $('.nav .nav_left ul li .yinchanglt');
	var em1 = $('.nav .nav_left ul li .lt em');
	lt.hover(function(){
		yinchanglt.show();
		em1.addClass('active');
		lt.addClass('active');
	},function(){
		yinchanglt.hide();
		em1.removeClass('active');
		lt.removeClass('active');
	});
	yinchanglt.hover(function(){
		yinchanglt.show();
		em1.addClass('active');
		lt.addClass('active');
	},function(){
		yinchanglt.hide();
		lt.removeClass('active');
		em1.removeClass('active');
	});
});

addLoadEvent(addBtn);
addLoadEvent(iBanner);
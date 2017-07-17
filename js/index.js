 $(function(){
	// 翻页轮播图
	var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    autoplay : 5000,
			    paginationClickable :true,
			    autoplayDisableOnInteraction : false,
			    speed:500,
			     nextButton: '.swiper-button-next',
   				 prevButton: '.swiper-button-prev',
			  })   

	  // 小轮播图
	  var mySwiper = new Swiper ('.cwll', {
			    direction: 'horizontal',
			    loop: true,
			    
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    autoplay : 5000,
			    paginationClickable :true,
			    autoplayDisableOnInteraction : false,
			    speed:500,
			  })   
	// wowo   
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
	// 专题选项卡
	var ztxx = $('.bottom_right .zt li');
	var boxt =$('.bottom_right .ztxx .boxt');
	ztxx.mouseenter(function(){
		ztxx.removeClass('active');
		$(this).addClass('active');
		boxt.removeClass('active');
		boxt.eq($(this).index()).addClass('active');
	});
	// 杂志轮播
	var ul = $('.bottom_ryc1 .tu .fy');
	var tu= $('.bottom_ryc1 .tu');
	var btnl = $('.bottom_ryc1 .tu .bottonl');
	var btnr = $('.bottom_ryc1 .tu .bottonr');
	var timer = null;

	function ll(){
		ul.stop().animate({left:'-368px'},function(){
			ul.append($('.bottom_ryc1 .tu ul li:first'));
			ul.css('left','-184px');
		});
	}
	timer = setInterval(ll,3000);
	tu.mouseenter(function(){
		clearInterval(timer);
	})
	tu.mouseleave(function(){
		timer = setInterval(ll,3000);
	})
	btnl.click(function(){
		ul.stop().animate({left:'0'},function(){
			ul.prepend($('.bottom_ryc1 .tu ul li:last'));
			ul.css('left','-184px');
		});
	})
	btnr.click(ll);

	// 宠物年龄计算
	var jsli = $('.cwr .cwag .gmag ul li');
	var yjjl = $('.cwr .cwag .gmag .tx');
	jsli.click(function(){
		jsli.removeClass('active').eq($(this).index()).addClass('active');
		yjjl.removeClass('active').eq($(this).index()).addClass('active');
	});

	// fixed
	var ewm = $('.fixedbox .ewm');
	var img = $('.fixedbox .img');
	ewm.hover(function(){
		img.show();
	},function(){
		img.hide();
	});
	// 回到顶部
	var db = $('.fixedbox .db');
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		if(st>=800){
			db.css('display','block');
		}else{
			db.css('display','none');
		}
	})
	db.click(function(){
			$('body,html').animate({scrollTop:0},1000);
		});
});
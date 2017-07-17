var app = angular.module('app',[]);
// 轮播图
app.controller('lb',function($scope){
	$scope.lb = [
		{
			src:'img/shouyepics_14689064641.jpg',
			h3:'握爪—「买宠物」安全有保障！',
			p:'买宠物-到“握爪”，30天安全赔付保障让买宠更安全、放心，还免费赠送千元养宠大礼包！',
			urla:'http://www.baidu.com',
			url:'http://www.baidu.com'
		},
		{
			src:'img/shouyepics_14688962402.jpg',
			h3:'握爪-天天宠物官方手机端',
			p:'握爪-天天宠物官方app，「宠物医生」在线解答养宠难题；「买宠物」安全有保障，提供30天赔付保险！',
			urla:'http://www.baidu.com',
			urla:'http://www.baidu.com'
		},
		{
			src:'img/shouyepics_14943845333_1.jpg',
			h3:'2017上海FCI亚洲杯',
			p:'2017上海FCI亚洲杯犬展的成功申办，是中国历史上首次取得举办辐射全亚洲的犬类专业大赛的机会。',
			urla:'http://www.baidu.com',
			urla:'http://www.baidu.com'
		},
		{
			src:'img/shouyepics_14957708234_1.jpg',
			h3:'CPF国际宠博会武汉展',
			p:'2017第五届CPF国际宠博会武汉展将在2017年9月15-17日于武汉国际博览中心举行，旨在打造全中国宠物行业全产业链集中展示...',
			urla:'http://www.baidu.com',
			urla:'http://www.baidu.com'
		},
		{
			src:'img/shouyepics_14930212065.jpg',
			h3:'恐怖来袭！我与它的灵异事件',
			p:'有人说狗狗能看到我们人类看不到的东西，来看看握爪网友遇到过的狗狗猫猫的灵异事件。',
			urla:'http://www.baidu.com',
			urla:'http://www.baidu.com'
		},
		{
			src:'img/shouyepics_14950765326.jpg',
			h3:'13岁小男孩徒步6公里只为救爱犬',
			p:'人在贫困的时候往往自顾不暇，更别提自己的宠物了。可是一位13岁的小男孩却选择了不放弃！',
			urla:'http://www.baidu.com',
			urla:'http://www.baidu.com'
		}
	];
});
// 犬类
app.controller('gou',function($scope){
	$scope.gou = ['泰迪犬','哈士奇','比熊','金毛','萨摩耶','德国牧羊犬','拉布拉多','博美',
	'吉娃娃','阿拉斯加雪橇犬','雪纳瑞','可卡','蝴蝶犬','腊肠犬','沙皮犬','罗威纳犬','高加索犬'];
	$scope.miao = ['美国短毛猫','暹罗猫','英国短毛猫','异国短毛猫','波斯猫','苏格兰折耳猫','狸花猫','俄罗斯蓝猫',
	'美国短尾猫','美国卷耳猫','雪纳瑞','布偶猫','更多>>'];
	$scope.tu = ['蜜袋鼯','法国垂耳兔','英国安哥拉兔','狮子兔','新西兰兔','三线仓鼠','老婆婆','银狐',
	'紫灰色龙猫','纯银色龙猫','巨型安哥拉兔','土拔鼠','更多>>'];
	$scope.yu = ['包金狮头鱼','黑兰寿鱼','黄金锦鲤','头尾灯鱼','鹤顶红鱼','花水泡鱼','六间碟鱼','四绒球鱼',
	'复活岛神仙鱼','十二蓝珍珠鱼','红绿灯鱼','双带小丑鱼','更多>>'];
});
// 选项卡 资讯
app.controller('yc',function($scope){
	$scope.yc = [
		{
			src:'img/shouyezixun14689187161.jpg',
			em:'握爪-宠物生活助手！',
			h2:'握爪-天天宠物官方APP',
			p:'「宠物专家」在线解答养宠难题；「买宠物」安全有保障，提供30天赔付保险！',
			cq:'[宠圈]',
			rq:' 2017第5届CPF国际宠博会：中国...',
			sj:'07-05',
			cq1:'[宠圈]',
			rq1:' 2017第5届CPF国际宠博会：中国...',
			sj1:'07-05',
			cq2:'[宠圈]',
			rq2:' 2017第5届CPF国际宠博会：中国...',
			sj2:'07-05',
			cq3:'[宠圈]',
			rq3:' 2017第5届CPF国际宠博会：中国...',
			sj3:'07-05',
			cq4:'[宠圈]',
			rq4:' 2017第5届CPF国际宠博会：中国...',
			sj4:'07-05',
			cq5:'[宠圈]',
			rq5:' 2017第5届CPF国际宠博会：中国...',
			sj5:'07-05'
		},
		{
			src:'img/shouyezixun14331310482.jpg',
			em:'退休大兵领养弃犬治好创伤综合征',
			h2:'萨摩耶“张嘴闭眼”享受专属按摩服务',
			p:'看完我都昏了！这只名叫Lexi的萨摩耶犬完全沉迷於主人的按摩技巧中。',
			cq:'[美容]',
			rq:' 2017第5届CPF国际宠博会：中国...',
			sj:'07-05',
			cq1:'[训练]',
			rq1:' 2017第5届CPF国际宠博会：中国...',
			sj1:'07-05',
			cq2:'[健康]',
			rq2:' 2017第5届CPF国际宠博会：中国...',
			sj2:'07-05',
			cq3:'[美容]',
			rq3:' 2017第5届CPF国际宠博会：中国...',
			sj3:'07-05',
			cq4:'[养护]',
			rq4:' 2017第5届CPF国际宠博会：中国...',
			sj4:'07-05',
			cq5:'[健康]',
			rq5:' 2017第5届CPF国际宠博会：中国...',
			sj5:'07-05'
		},
		{
			src:'img/shouyezixun14346110733.jpg',
			em:'“美食厨房猫粮“可延长猫咪寿命',
			h2:'“美食厨房猫粮“可延长猫咪寿命',
			p:'铲屎官们都希望能给自家的猫主子提供更加天然健康的饮食，如何选择一款正确的猫粮很...',
			cq:'[养护]',
			rq:' 2017第5届CPF国际宠博会：中国...',
			sj:'07-05',
			cq1:'[养护]',
			rq1:' 2017第5届CPF国际宠博会：中国...',
			sj1:'07-05',
			cq2:'[品种]',
			rq2:' 2017第5届CPF国际宠博会：中国...',
			sj2:'07-05',
			cq3:'[训练]',
			rq3:' 2017第5届CPF国际宠博会：中国...',
			sj3:'07-05',
			cq4:'[养护]',
			rq4:' 2017第5届CPF国际宠博会：中国...',
			sj4:'07-05',
			cq5:'[训练]',
			rq5:' 2017第5届CPF国际宠博会：中国...',
			sj5:'07-05'
		},
		{
			src:'img/shouyezixun14345358764.jpg',
			em:'歌剧魅影“真羊”版 黑白臉咩咩 ',
			h2:'主人分享世界最大“放屁坐垫” ',
			p:'国外有一名主人厄尼尔自己动手做了一个世界最大的“放屁坐垫”',
			cq:'[爬行]',
			rq:' 2017第5届CPF国际宠博会：中国...',
			sj:'07-05',
			cq1:'[爬行]',
			rq1:' 2017第5届CPF国际宠博会：中国...',
			sj1:'07-05',
			cq2:'[兔兔]',
			rq2:' 2017第5届CPF国际宠博会：中国...',
			sj2:'07-05',
			cq3:'[兔兔]',
			rq3:' 2017第5届CPF国际宠博会：中国...',
			sj3:'07-05',
			cq4:'[鼠鼠]',
			rq4:' 2017第5届CPF国际宠博会：中国...',
			sj4:'07-05',
			cq5:'[爬行]',
			rq5:' 2017第5届CPF国际宠博会：中国...',
			sj5:'07-05'
		},
		{
			src:'img/shouyezixun14350456735.jpg',
			em:'巴西发现七种“亮橘色”迷你蛙',
			h2:'温馨: 孤儿小鸭与主人摇晃散步  ',
			p:'大部份的主人都是跟家中的狗狗外出散步，不过，国外有一名主人却非常特别。',
			cq:'[鱼病]',
			rq:' 2017第5届CPF国际宠博会：中国...',
			sj:'07-05',
			cq1:'[饲养]',
			rq1:' 2017第5届CPF国际宠博会：中国...',
			sj1:'07-05',
			cq2:'[饲养]',
			rq2:' 2017第5届CPF国际宠博会：中国...',
			sj2:'07-05',
			cq3:'[器材]',
			rq3:' 2017第5届CPF国际宠博会：中国...',
			sj3:'07-05',
			cq4:'[品种]',
			rq4:' 2017第5届CPF国际宠博会：中国...',
			sj4:'07-05',
			cq5:'[器材]',
			rq5:' 2017第5届CPF国际宠博会：中国...',
			sj5:'07-05'
		},
		{
			src:'img/shouyezixun14346998896.jpg',
			em:'喵星人睡觉知道用棉被和枕头',
			h2:'母蛇遇“火热”公蛇：产62只宝宝',
			p:'英国韦伯爬虫中心饲养7年、长约5.4公尺的母蟒蛇莎芙朗日前一口气产下62颗蛋。',
			cq:'[鸟类]',
			rq:' 2017第5届CPF国际宠博会：中国...',
			sj:'07-05',
			cq1:'[花卉]',
			rq1:' 2017第5届CPF国际宠博会：中国...',
			sj1:'07-05',
			cq2:'[鸟类]',
			rq2:' 2017第5届CPF国际宠博会：中国...',
			sj2:'07-05',
			cq3:'[信鸽]',
			rq3:' 2017第5届CPF国际宠博会：中国...',
			sj3:'07-05',
			cq4:'[鸟类]',
			rq4:' 2017第5届CPF国际宠博会：中国...',
			sj4:'07-05',
			cq5:'[鸟类]',
			rq5:' 2017第5届CPF国际宠博会：中国...',
			sj5:'07-05'
		}
	];
	$scope.zx = ['新闻','狗狗','猫猫','小宠','水族','花鸟'];
	$scope.page=0;
	$scope.show = function(index){
		$scope.page=index;
	}
});

// 选项卡 专题
app.controller('zt',function($scope){
	$scope.ztyc = [
		{
			src:'img/special_1382680157.jpg',
			content:'第十四届亚洲宠物...'
		},
		{
			src:'img/special_1382680423.jpg',
			content:'宠物夏季攻略'
		},
		{
			src:'img/special_1382680447.jpg',
			content:'科学喂养从狗粮开始'
		},
		{
			src:'img/special_1382680463.jpg',
			content:'宠物绝育——不是...'
		}

	];
	$scope.ztr = ['img/zazhi_1406015454.jpg','img/zazhi_1397194653.jpg',
	'img/zazhi_1392881781.jpg','img/zazhi_1390295866.jpg','img/zazhi_1382689555.jpg'];
});

// 宠物论坛ul
app.controller('cwlt',function($scope){
	$scope.cwlt=[
		{
			title:'宠物店深夜被盗民警循线擒下惯偷',
			content:'狗狗为什么会舔爪子',
			contenta:'小S终于能跟狗和谐相处了',
			contentb:'宠物犬下口对象大都是主人',
			hui:'[上海分会]',
			huia:'[上海分会]',
			huib:'[上海分会]'
		},
		{
			title:'三条腿的狗给人的启示',
			content:'老太被狗开车压伤获赔数十万',
			contenta:'狗有哪些自然习性',
			contentb:'德普偷带宠物入澳或将面临监禁',
			hui:'[上海分会]',
			huia:'[上海分会]',
			huib:'[北京分会]'
		}
	];
	$scope.xlb = [
		{
			src:'img/shouyeforum_14332274181.jpg',
			url:'http://www.baidu.com',
			em:'老人重金寻狗戳中空巢之痛'
		},
		{
			src:'img/shouyeforum_14327767262.jpg',
			url:'http://www.baidu.com',
			em:'狗的一般习性是怎样的'
		},
		{
			src:'img/shouyeforum_14327770943.jpg',
			url:'http://www.baidu.com',
			em:'小狗为什么会掉毛'
		},
		{
			src:'img/shouyeforum_14327775894.jpg',
			url:'http://www.baidu.com',
			em:'杭城8家宠物可以进出的餐厅'
		},
		{
			src:'img/shouyeforum_14321732475.jpg',
			url:'http://www.baidu.com',
			em:'猫咪泌尿道疾病的症状'
		},
	]
});

//热门宠物集
app.controller('cwj',function($scope){
	$scope.cwj = [' 高品质德系杜宾幼犬出售 、头版正、...',' 高品质柯基带血统出售中 终身质保 ...',
	' 中国高端雪纳瑞繁育专家 纯种迷你雪...',' 高品质小鹿带血统出售中 终身质保 ...',
	' 大理买最漂亮的罗威纳 大理狗场出售...'];
	$scope.cwj1 = ['出售精品藏獒幼犬,大骨架大毛量 纯...',' 雪纳瑞带血统出售中 终身质保 质量...',
	' 昭通买漂亮边境牧羊犬 昭通狗场出售...','  高品质巴哥带血统出售中 终身质保 ...',
	'  精品可卡宝宝、CKU认证血统、质量...'];
	$scope.cwj2 = [' 约克夏带血统出售中 终身质保 质量...',' 高品质柯基带血统出售中 终身质保 ...',
	' 中国高端雪纳瑞繁育专家 纯种迷你雪...',' 楚雄哪里买漂亮古牧 楚雄狗场出售最...',
	' 大理买最漂亮的罗威纳 大理狗场出售...']
	$scope.zd = [
		{
			src:"img/bomb.gif",
			content:'定时炸弹'
		},
		{
			src:"img/dog.gif",
			content:'遛狗'
		},
		{
			src:"img/market2.png",
			content:'天天市场'
		},
		{
			src:"img/account2.png",
			content:'记事本'
		}
	]
});

// 合作伙伴
app.controller('cooperation',function($scope){
	$scope.cooperation = ['握爪宠物','宠物资讯','宠物知识百科','品种大全','宠物训练','邮箱：service@wozhua.mobi',
'奇宠网','宠物相册','萌宠视频','疾病百科','穿衣搭配网','找宠友','怀孕百宝箱','合亚眼镜网','狗狗读心术','紧急自救 ',
'淘狗网','宠物窝窝','宠物日志','天天宠物手机版-APP']

});
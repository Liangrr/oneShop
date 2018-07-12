
var loupe = (function(){
//	获取登录,注册按钮
	$login = $('.hd_login_link');
	$register = $('#register');
//	获取轮播图图片,圆点俩个元素
    $loupeImgs = $('.nav_loupe_imgs');
    $loupeDots = $('.nav_loupe_ul'); 
//  定时器
	var timer = null;
//	获取广告条
	$banner_ul = $('.section .banner .banner_ul_bg .banner_ul');
	
    return{
//  	初始化函数
        init(){
            this.event();
            this.autoPlay();
            this.getData();
        },
//      事件函数
        event(){
            var _this = this;
//          点击圆点
            $loupeDots.children('li').on('click',function(){
//          	展示图片函数
				_this.showImg($(this).index());
//				自动播放函数
				_this.autoPlay($(this).index());
			});
        },
//      从sessionStorage获取存的值
        getData() {
            var _this = this;

            if (sessionStorage.hasOwnProperty("userData")) {
//	           	从sessionStorage获取数据然后转为对象
	            $login.html(JSON.parse(sessionStorage.userData).username);
//				改变a跳转的界面
	        	$login.attr('href','person.html');
//				登陆后,删除注册按钮
	        	$register.remove();            	
            }

//      	请求json数据,进行渲染
        	$.get('json/jsonIndexData.json',this.insertData,'json');
        },
//      json数据进行渲染
		insertData(json){
			var arr = [];
			for (var i=0;i<json.length;i++) {
				var _li = `<li id="${json[i].id}">
				<a href="goods.html">
				<p>${json[i].describe}</p>
				<p>${json[i].price}</p>
				<p>${json[i].name}</p>
				<img src='${json[i].img}'/>
				</a>
				</li>`;
				arr.push(_li);
			}
			$banner_ul.html(arr.join(''));
		},
//      轮播图展示图片函数
        showImg(index){
//      	点击圆点时给点击的加class,其它清空
			$loupeDots.children('li').eq(index).addClass('active').siblings().removeClass('active');
//			点击的淡入,其他淡出
			$loupeImgs.children('li').eq(index).fadeIn().siblings().fadeOut();
        },
//      轮播图自动播放函数
        autoPlay(index){
//      	清空定时器
			clearInterval(timer);
//			定义默认值
			index = index || 0;
//			保存实例this
			var _this = this;
			timer = setInterval(function(){
//				定时自增
				index++;
//				达到轮播图数目上限归0
				if (index == $loupeDots.children('li').length) {
					index = 0;
				}
				_this.showImg(index);
			},2000);
        }
    }
})();
loupe.init();



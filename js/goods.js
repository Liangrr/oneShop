
var glass = (function(){
	$login = $('.hd_login_link');
	$register = $('#register');
//	定义一个数组，把这个数组存到localStorage对象
    var shopList = localStorage.shopList || '[]';
	shopList = JSON.parse(shopList);
	
//	glass_small,glass,glass_big分别代表小中大	
	var gm = document.querySelector('.glass_min');
	var bor = document.querySelector('.glass_midImg');
//	定义中图离左边和顶部的距离
	var box_l;
	var box_t;
		return {
			init(){
				this.event();
				this.getData();
			},
			event(){
				var _this = this;
//				放大镜函数，判断点击哪个小图，然后切换小中大图，在magnify函数内执行
				$('.glass_smallImg').children('li').on('click',function(){
					_this.magnify($(this).index());
				});
				$('.glass_midImg').on('mouseenter',function(e){
					e = e || window.event;
					$('.glass_min').css({display:'block'});
					$('.glass_bigImg').css({display:'block'});
					box_l = e.clientX - e.offsetX;
					box_t = e.clientY - e.offsetY;
					
				});
				$('.glass_midImg').on('mouseleave',function(){
					box_l = 0;
					box_t = 0;
					$('.glass_min').css({display:'none'});
					$('.glass_bigImg').css({display:'none'});
					
				});
				$('.glass_midImg').on('mousemove',function(e){
					e = e || window.event;
					
					var l = e.clientX - box_l - gm.offsetWidth/2;
					var t = e.clientY - box_t - gm.offsetHeight/2;

					var maxL = bor.clientWidth - gm.offsetWidth;
					var maxT = bor.clientHeight - gm.offsetHeight;
					
					l = (l>maxL?maxL:(l<0?0:l));
					t = (t>maxT?maxT:(t<0?0:t));
					
					gm.style.left = l + 'px';
					gm.style.top = t + 'px';
					
					$('.glass_bigImg img').css({left:-2*l});
					$('.glass_bigImg img').css({top:-2*t});
				});
//				点击加入购物车按钮
				$('#joinCar').on('click',function(){
					var params = {
						id:1,
						count:$('#modNum').val(),
						price:'29999.00',
						name:'dellX9'
					}
					_this.addMod(params);
				})
			},
//			这里利用localStorage存储数据
			addMod(params){
				var bool = true;
				for(var i=0;i<shopList.length;i++){
					if (params.id == shopList[i].id) {
						bool = false;
						shopList[i].count += params.count;
						break;
					}
				}
				if (bool) {
					shopList.push(params);
				}
				localStorage.shopList = JSON.stringify(shopList);
			},
			getData() {
	            var _this = this;
//				判断是否存在userData,存在则更新用户
            	if (sessionStorage.hasOwnProperty("userData")) {
	//	           	从sessionStorage获取数据然后转为对象
		            $login.html(JSON.parse(sessionStorage.userData).username);
	//				改变a跳转的界面
		        	$login.attr('href','person.html');
	//				登陆后,删除注册按钮
		        	$register.remove();            	
           		}
	    	},
			magnify(index){
				var saucer = `glassImg/saucer${index+1}.jpg`;
				var saucer_big = `glassImg/saucer_big${index+1}.jpg`;
				$('.glass_smallImg').children('li').eq(index).addClass('active').siblings().removeClass('active');
				$('.glass_midImg').children('img').attr('src',saucer);
				$('.glass_bigImg').children('img').attr('src',saucer_big);
			}

		}
	})();
	glass.init();
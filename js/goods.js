
	
	
var glass = (function(){
	// glass_small,glass,glass_big分别代表小中大		
		return {
			init(){
				this.event();
			},
			event(){
				var _this = this;
				$('.glass_smallImg').children('li').on('click',function(){
					_this.magnify($(this).index());
				});
				$('.glass_midImg').on('mouseenter',function(){
					$('.glass_min').css({display:'block'});
					$('.glass_bigImg').css({display:'block'});
				});
				$('.glass_midImg').on('mouseleave',function(){
					$('.glass_min').css({display:'none'});
					$('.glass_bigImg').css({display:'none'});
				});
				$('.glass_midImg').on('mousemove',function(e){
					e = e || window.event;
					var bor = document.querySelector('.glass_midImg');
					var gm = document.querySelector('.glass_min');
					var l = e.clientX - gm.offsetWidth/2;
					var t = e.clientY - gm.offsetHeight/2;
//					这里差个距离左边和顶端的距离bug
					var maxL = bor.clientWidth - gm.offsetWidth;
					var maxT = bor.clientHeight - gm.offsetHeight;
					
					l = (l>maxL?maxL:(l<0?0:l));
					t = (t>maxT?maxT:(t<0?0:t));
					
					gm.style.left = l + 'px';
					gm.style.top = t + 'px';
					
					$('.glass_bigImg img').css({left:-2*l});
					$('.glass_bigImg img').css({top:-2*t});
				});

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
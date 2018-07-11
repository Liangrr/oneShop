var loupe = (function(){
    $loupeImgs = $('.nav_loupe_imgs');
    $loupeDots = $('.nav_loupe_ul'); 
	var timer = null;
    return{
        init(){
            this.event();
            this.autoPlay();
        },
        event(){
            var _this = this;
            $loupeDots.children('li').on('click',function(){
				_this.showImg($(this).index());
				_this.autoPlay($(this).index());
			});
        },
        showImg(index){
			$loupeDots.children('li').eq(index).addClass('active').siblings().removeClass('active');
			$loupeImgs.children('li').eq(index).fadeIn().siblings().fadeOut();
        },
        autoPlay(index){
			clearInterval(timer);
			index = index || 0;
			var _this = this;
			timer = setInterval(function(){
				index++;
				if (index == $loupeDots.children('li').length) {
					index = 0;
				}
				_this.showImg(index);
			},2000);
        }
    }
})();
loupe.init();

var banner = (function(){
    
})();


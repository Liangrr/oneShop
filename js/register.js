	var register = (function(){
		$uName = $('#uName');
		$phone = $('#phone');
		$code = $('#verify');
		$pwd = $('#pwd');
		$pwd2 = $('#pwd2');
		
		$sub = $('#sub');
//		定义随机验证码
		var ranSix = ranSixNumLet();
//		定义对错的class;
		var txt_g = 'iconfont oneShop-duihao txt_green';
		var txt_r = 'iconfont oneShop-cuo txt_red';
		return{
			init(){
				$code.html(ranSix);
				$('.tips').children('b').attr('class','');
//				这里多个b标签,有可能出bug
//				$('.tips').children('b').eq(2).attr('class',txt_g);
				this.define();
				this.events();
			},
			define(){
//				定义一个对象,把所有的正则放到对象
				var regObj = {
					'#uName':/^[a-zA-Z]+\w+$/g,
					'#phone':/^1[3,5,7,8,9]\d{9}$/g,
					'#code':/^\w{6}/g,
					'#pwd':/^\w{6,15}$/g,
					'#pwd2':/^\w{6,15}$/g
				};
//				把对象的正则加到相应的input的pattern属性里
				for (var i in regObj) {
					$(i).attr('pattern',regObj[i]);
				}
			},
			events(){
				var _this = this;
//				点击输入框input,鼠标移开时进行的操作
				$('form').children('input').on('blur',function(){
//					输入的值是否符合正则表达式的要求
					if(eval($(this).attr('pattern')).test($(this).val())){
//						如果点击第二个,特殊处理
						if ($(this).index() == 2) {
//							输入框的值是否等于随机框的值
							if ($(this).val() == ranSix) {
								$('.tips').children('b').eq(2).attr('class',txt_g);
							}else{
								$('.tips').children('b').eq(2).attr('class',txt_r);
							}
						}else if($(this).index() == 5){
							if ($(this).val() == $(this).prev('input').val()) {
								$('.tips').children('b').eq(5).attr('class',txt_g);
							} else{
								$('.tips').children('b').eq(5).attr('class',txt_r);
							}
						}else{
//							这个判断是除第二个和最后一个,其他input进行判断 且正确 执行的
							$('.tips').children('b').eq($(this).index()).attr('class',txt_g);							
						}
					}else{
//						这个判断是除第二个和最后一个,,其他input进行判断 且错误 执行的
						$('.tips').children('b').eq($(this).index()).attr('class',txt_r);
					}
				});
				
				$code.on('click',function(e){
					e.preventDefault();
					ranSix = ranSixNumLet();
					$code.html(ranSix);
				});
				
				$sub.on('click',function(e){
					e.preventDefault();
					
					$inp0 = $('form').children('input').eq(0);
					$inp1 = $('form').children('input').eq(1);
					$inp2 = $('form').children('input').eq(2);
					$inp3 = $('form').children('input').eq(3);
					$inp4 = $('form').children('input').eq(4);
//					判断值是否正确
					if(eval($inp0.attr('pattern')).test($inp0.val())
					&&eval($inp1.attr('pattern')).test($inp1.val())
					&&eval($inp2.attr('pattern')).test($inp2.val())
					&&$inp2.val()==ranSix
					&&eval($inp3.attr('pattern')).test($inp3.val())
					&&eval($inp4.attr('pattern')).test($inp4.val())
					&&($inp3.val()==$inp4.val())){
						
						var params = {
							username:$('#uName').val(),
							password:$('#pwd').val(),
							phone:$('#phone').val()
						}
						$.post('php/register.php',params,_this.cbRegister,'json');
					}else{
						alert('注册信息有错！')
						return;
					}
				})
			},
			cbRegister(json){
				if (json.code == 200) {
					alert('注册成功!跳转到登录');
					window.location.href = 'login.html';
				}
			}
		}
	})();
	register.init();
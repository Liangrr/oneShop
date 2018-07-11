//	console.log(ranSixNumLet());
	var register = (function(){
		$uName = $('#uName');
		$phone = $('#phone');
		$code = $('#verify');
		$pwd = $('#pwd');
		$pwd2 = $('#pwd2');
		
		$sub = $('#sub');
		return{
			init(){
				this.events();
			},
			events(){
				var _this = this;
//				var reg = /^[a-zA-Z]+\w+$/g;
//				var regpwd = /^\w{2,15}$/g;
//				var regphone = /^1[3,5,7,8,9]\d{9}$/g;
				
				$sub.on('click',function(e){
					var ranSix = ranSixNumLet();
					e.preventDefault();
//					if (!reg.test($uName.val())) {
//						alert('您输入的账号有误！请重新输入！');
//					}else if(!regphone.test($phone.val())){
//						alert('您输入的手机号码有误！请重新输入！');
//					}else if($code.val()!=ranSix){
//						alert('验证码出错');
//					}else if(!regpwd.test($pwd.val())){
//						alert('您输入的密码有误！请重新输入！');
//					}else if(!regpwd.test($pwd.val())||($pwd.val()!=$pwd2.val())){
//						alert('您输入的密码有误！请重新输入！');
//					}else{
						var params = {
							username:$('#uName').val(),
							password:$('#pwd').val(),
							phone:$('#phone').val()
						}
						$.post('php/register.php',params,_this.cbRegister,'json');
//					}
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
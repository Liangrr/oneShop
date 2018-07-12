	var login = (function () {
		$uName = $("#username");
		$pwd = $("#password");
		$sub = $('#loginBtn');
		return {
			init(){
				this.event();
			},
			event(){
				var _this = this;
				$sub.on('click',function(e){
					e = e || window.event;
					e.preventDefault();

					var reg = /^[a-zA-Z]+\w+$/g;
					var regpwd = /^\w{2,15}$/g;
					if (reg.test($uName.val())&&regpwd.test($pwd.val())) {
						var params = {
							username:$uName.val(),
							password:$pwd.val()
						}
						$.post('php/login.php',params,_this.cbLogin,'json');
					}else if(reg.test($uName.val())){
						alert('您输入的密码有误！请重新输入！');
					}else{
						alert('您输入的账号有误！请重新输入！');
					}

				});
			},
//			回调函数
			cbLogin(json){
				if (json.code==200) {
//					把获取的账号信息存到sessionStorage不需要永久保存仅仅一次会话  所以用session
					sessionStorage.userData = JSON.stringify(json.data);
//					跳转到主页
					window.location.href = 'index.html';
				}
			}

		}
	})();
	login.init();
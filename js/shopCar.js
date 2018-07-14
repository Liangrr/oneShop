	var shopCar = (function(){
		$login = $('#login');
		$tbox = $('.tbox');
		var shopList = localStorage.shopList || '[]';
   		shopList = JSON.parse(shopList);
   		$total = $('#total');

		return {
			init(){
				this.events();
				this.getData();
				this.showMod(shopList);
			},
//			展示数据,商品跳转时将信息加载到localStorage
//			现在从localStorage中获取信息
			showMod(data){
				var str = []
				var totalMoney = 0;
	            for(var i = 0; i < data.length; i++) {
	            	totalMoney += data[i].price * data[i].count;
	                var li = `<tr id="${data.id}">
	                            <td>${data[i].name}</td>
	                            <td>${data[i].price}</td>
	                            <td><input type='number' value='${data[i].count}' />
	                            
	                            </td>
	                            <td>${data[i].price*data[i].count}</td>
	                            <td><button class='btn btn-danger del-btn'>删除</button></td>
	                            </tr>`;
	                str.push(li);
	            }
	            $tbox.html(str.join(''));
	            
	            $total.html(totalMoney);
			},
	        //  事件函数
	        events() {
	            var _this = this;
	            $tbox.on('change', 'input', function() {
	                // 获取此tr
	                var tr = $(this).closest('tr');
	                // 获取文本值(商品更新后的数据)
	                var val = $(this).val();
	                // 修改对应数据
	                shopList[tr.index()].count = val;
	                // 存入本地数据库
	                localStorage.shopList = JSON.stringify(shopList);
					//改变数据后重新遍历一次
	                _this.showMod(JSON.parse(localStorage.shopList));
	                
	            })
	            $tbox.on('click', '.del-btn', function() {
	               var tr = $(this).closest('tr');
	               // 删除数组中对应的数据
	               shopList.splice(tr.index(), 1);
	               // 存入到本地数据库
	               localStorage.shopList = JSON.stringify(shopList);
	               // 移出dom元素
	               tr.remove()
	            })
	        },
			getData() {
	            var _this = this;
//				判断是否存在userData,存在则更新用户
            	if (sessionStorage.hasOwnProperty("userData")) {
	//	           	从sessionStorage获取数据然后转为对象
		            $login.html(JSON.parse(sessionStorage.userData).username);
	//				改变a跳转的界面
		        	$login.attr('href','person.html');     	
           		}
            	
	       }
		}
	})();
	shopCar.init();
	
	//随机生成6位验证码(至少包含一个数字和一个字母)
	function ranSixNumLet(){
		//	定义装有数字的数组
			var num = [];
		//	定义装有字母的数组
			var letter = [];
		//	定义装有数字和字母的数组
			var arrAll = [];
		//	从ascii获取数字并且加到num数组
			for (var i=48;i<58;i++) {
				num.push(String.fromCharCode(i));
			}
		//	从ascii获取字母并且加到letter数组	
			for (var j=97;j<123;j++) {
				letter.push(String.fromCharCode(j));
		//		这里是获取到的字母进行大写转换再加入letter数组
				letter.push(String.fromCharCode(j).toUpperCase());
			}
		//	num数组与letter数组合并并且赋给arrAll
			arrAll = num.concat(letter);
		//	定义一个随机六位数,首先规定首个为数字
		//	并且调用随机值函数,范围是该数组的长度-1，这里是数字
			var randomArr = num[randomMax_Min(num.length-1)];
		//	并且调用随机值函数,范围是该数组的长度-1，这里是字母	
			randomArr = randomArr + letter[randomMax_Min(letter.length-1)];
		//	上面获取俩位了,这里循环获取四位
			for (var k=0;k<4;k++) {
		//	并且调用随机值函数,范围是该数组的长度-1，这里是数字和字母		
				randomArr += arrAll[randomMax_Min(arrAll.length-1)];
			}	
//			'你的六位验证码(至少包含一个字母和一个数字):'
		return randomArr;
	}
	
	//打乱数组
	function fixArr(arr){
//		定义一个新的数组来装 从旧数组中获取的元素
		var arrLoad = [];
//		定义获取数组时的长度
		var length =  arr.length;
//		循环刚获取数组的长度的次数
		for (var i=0;i<length;i++) {
//			定义一个获取数组长度内的随机数，这里因为下面的spice删除操作，
//			必须用arr.length来进行更新数组长度的变化，如果使用获取时的
//			固定长度,那么有可能获取到undefined,就是数组已经被删除的元素的位置
			var ran = randomMax_Min(arr.length,0);
//			把获取到的数组内的元素加到新的数组来
			arrLoad.push(arr[ran]);
//			获取完后进行删除操作,删除从第ran个开始,删除一个
			arr.splice(ran,1);
		}
//		返回新的数组
		return arrLoad;
	}
//	随机rgb颜色值，采用字符串拼接方法
	function ranRGB(){
		var color = '#';
//		rgb取值范围数组
		var str = '0123456789abcdef';
		for (var i=0;i<6;i++) {
//			每循环一次,把前面的加上后面随机生成的值拼接
			color = color + str[randomMax_Min(str.length-1)];
		}
		return color;
	}
	
//	随机数
	function randomMax_Min(max,min){
//		如果最小值为空,则返回0
		min = min ||0;
//		对随机数的范围进行四舍五入取整
		return Math.round(min+Math.random()*(max-min));
	}
	
	
//	var tab = document.getElementById('tab')
//	var tr = document.querySelectorAll('tr');
//	var td = document.querySelectorAll('td');
//	var obj = [{'name': '周杰伦','age': '28'}]
	
//	在表格内添加内容，通用
	function insertObj(obj){
//				获取文本内容的条数
		for(var i=0;i<obj.length;i++){
//					把每条内容的每个属性值加到新数组
			var obj_val = Object.values(obj[i]);
			console.log(obj[i])
			console.log(obj_val)
//					每条内容需要一行
			var _tr = document.createElement('tr');
//					对每条内容的每个属性值进行循环
			for (var j=0;j<obj_val.length;j++) {
//						定义td装载属性值
				var _td= document.createElement('td');
//						把第几个属性值加到第几个td
				_td.innerHTML = obj_val[j];
//						把td加到tr
				_tr.appendChild(_td);
			}	
//				把tr加到table
				tab.appendChild(_tr)
		}
	}
	
//	详细讲明:
//	比如多个按钮,你想让点击的改变样式,其它不变,则可以用下面的方法
	function handleDom(){
		for (var i=0;i<btn.length;i++) {
//				把当前按钮的下标保存，按下按钮对应显示下标一致的盒子，其它盒子隐藏
			btn[i].index = i;
			btn[i].onclick = function(){
//					遍历每个按钮样式清空
//					遍历每个盒子隐藏
				for (var j=0;j<btn.length;j++) {
					btn[j].className = ''
					show[j].style.display = 'none';
				}
//					this表示当前按钮
				this.className = 'active'
//					盒子显示按钮下标的那个盒子，this。index是开始时保存的按钮下标
			 	show[this.index].style.display = 'block'
			}
		}		
	}

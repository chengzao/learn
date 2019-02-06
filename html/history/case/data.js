/**
 * History API
 * Demo
 * by Botue
 * 2016-01-29
 */

// 给导航添加点击事件
$('li').on('click', function () {
	var _this = $(this),
		// 获取不同导航对应的key值
		key = _this.attr('data-key'),
		url = _this.find('a').attr('href');

	// 更改导航菜单样式
	_this.addClass('active').siblings().removeClass('active');

	// 获取数据
	getData(key, url);

	// 取消默认行为
	return false;
});

// 监听回退/前进
window.onpopstate = function (ev) {
	console.log(ev)
	// 读取自定义数据
	var key = ev.state && ev.state.key || 'index',
		// 当前导航
		current = $('[data-key=' + key + ']'),
		url = current.find('a').attr('href');

	console.log(key)

	current.addClass('active').siblings().removeClass('active');

	// 获取数据
	getData(key);
}

// 公共函数
function getData(key, url) {
	$.ajax({
		url: 'data.php',
		type: 'post',
		data: {key, key},
		success: function (data) {
			// console.log(data);

			// 将取出的内容放到页面上
			$('.content').html(data);

			// 存储自定义数据
			if(url) {
				history.pushState({key: key}, '', url);
			}
			
		}
	});
}
/**
 * lightTreeview for jQuery 1.2.x
 * Download by http://www.codefans.net
 * author: feiyu
 * e-mail: feiyu@asgard.cn
 * website: http://feiyu.asgard.cn
 *
 * Version: 1.0.0
 */

(function($) {

	$.lightTreeview={
		toggle: function(o,speed) {
			exec(o,speed,'toggle');
		},
		close: function(o,speed) {
			exec(o,speed,'hide');
		},
		open: function(o,speed) {
			exec(o,speed,'show');
		}
	};

	function exec(o,s,act) {
		var f=$(o).parent();
		var ico=f.find('>.flex-ico');
		flex(ico,f,{animate:isNaN(s)?100:s},act);
	}

	$.fn.lightTreeview=function(s1) {
		if(typeof(s1)=='undefined') s1 = {};
		var settings=defaultSettings();
		$.extend(settings,s1);

		this.addClass('lightTreeview');

		//是否启用连节线
		if(!settings.line) this.addClass('treeview-noline');

		//是否设置了风格
		if(settings.style) this.addClass('treeview-'+settings.style);

		//取节点
		var node=$('li:has(ul,ol)',this);

		//设置结尾的分枝
		$('li:last-child',this).addClass('branch-last');

		if(settings.collapse) {	//允许伸缩

			//设置带图标的li的连节线
			node.addClass('node-normal').filter(':last-child').attr('class','node-last');

			//默认文件图标支持
			if(settings.fileico) $('li:not(:has(ul,ol))>:first-child',this).addClass('treeview-file');

			//默认文件夹图标支持
			if(settings.folderico) $('>:first-child',node).addClass('treeview-folder');

			//在节点中加入默认加减
			node.css('cursor','pointer').prepend('<span class="flex-ico"></span>').find('>ul,>ol').filter(':hidden').parent().find('>.flex-ico').addClass('flex-close');
			$('>.flex-ico',node.filter(':last-child')).addClass('flex-none');
			$('>ul,>ol',node.filter(':last-child')).filter(':hidden').parent().addClass('node-last-close');
			node.find('>ul,>ol').filter(':hidden').parent().find('>.treeview-folder').addClass('treeview-folder-close');

			//绑定标题行的点击事件
			if(settings.nodeEvent)
				node.find('>:nth-child(2)').click(function() {
					$(this).parent().find('>.flex-ico').trigger('click');
				});

			//绑定默认事件
			$('>.flex-ico',node).click(function() {
				var f=$(this).parent();	//当前节点
				if(settings.unique && $('>ul,>ol',f).is(':hidden')) {	//同级互斥
					var ff=$('>li:has(ul,ol)',f.parent()).not(f);	//排除当前节点的同级节点集合
					flex($('>:first-child',ff),ff,settings,'hide');
				}
				flex($(this),f,settings);
			});
		}
	};

	//缩放操作
	function flex(ico,father,settings,type) {
		var list=$('>ul,>ol',father);
		var ln=ico.filter('.flex-none').parent();
		var ic=ico.not('.flex-none');
		var fl=$('>.treeview-folder',father);
		if(type=='hide') {
			ln.addClass('node-last-close');
			ic.addClass('flex-close');
			fl.addClass('treeview-folder-close');
			list.hide(settings.animate);
		}
		else if(type=='show') {
			ln.removeClass('node-last-close');
			ic.removeClass('flex-close');
			fl.removeClass('treeview-folder-close');
			list.show(settings.animate);
		}
		else {
			ln.toggleClass('node-last-close');
			ic.toggleClass('flex-close');
			fl.toggleClass('treeview-folder-close');
			list.toggle(settings.animate);
		}
	}

	//默认参数设置
	var defaultSettings=function() {
		return {
			collapse: true,		//允许折叠
			line: true,			//有连接线
			animate: 200,		//动画速度
			nodeEvent: true,	//响应分枝整行的事件
			unique: false,		//同级节点下是否互斥
			style: '',			//默认风格
			fileico: false,		//文件图标支持
			folderico: false	//文件夹图标支持
		}
	};
})(jQuery);
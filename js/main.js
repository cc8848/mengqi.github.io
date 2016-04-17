define(function(require,exports){
	var explorer = window.navigator.userAgent.toUpperCase();
	if(explorer.indexOf("MSIE")!=-1){
		
		alert("不好意思，此网站不支持IE浏览器，请使用火狐或谷歌浏览器");
		return false;
		
	}
	//初始化时
	require('public.js').init();
	// //各个页面的js加载
	// require('index.js').getStyle();
	// require('message.js').messageOnload();
	// // require('skill.js').skill();
	// require('production.js').photos();
	// require('prodescrition.js').proDescrition();
	// require('skilldescrition.js').skilldescrition();
	// require('index.js').getStyle();
	var mainWrap = document.getElementById('mainwrap');
	//获取到每一个section
	var asection = require('getclass.js').getElementsByClass(mainWrap, 'section', 'sec-con');
	var oAside = mainWrap.getElementsByTagName('aside')[0];
	//获取到的两个按钮
	var aBtn = oAside.getElementsByTagName('a');
	var childNav=document.getElementById("child-nav");
	//获取到的nav导航栏
	var navSpan=childNav.getElementsByTagName("span");
	window.bBtn = true;
	// window.onhashchange = function(){
	// 	if(window.bBtn){
	// 		window.location.reload();
	// 	}
	// };
	require('show.js').show(asection);
	require('hide.js').hide(aBtn,asection,navSpan);

})
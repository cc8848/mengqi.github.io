define(function(require,exports){
	var explorer = window.navigator.userAgent.toUpperCase();
	if(explorer.indexOf("MSIE")!=-1){
		alert("不好意思，此网站不支持IE浏览器，请使用火狐或谷歌浏览器");
		return false;
	}
	var mainWrap = document.getElementById('mainwrap');
	var asection = require('getclass.js').getElementsByClass(mainWrap, 'section', 'sec-con');
	var oAside = mainWrap.getElementsByTagName('aside')[0];
	var aBtn = oAside.getElementsByTagName('a');
	var childNav=document.getElementById("child-nav");
	//获取到的nav导航栏
	var navSpan=childNav.getElementsByTagName("span");
	window.bBtn = true;
	require('show.js').show(asection);
	require('hide.js').hide(aBtn,asection,navSpan);

})
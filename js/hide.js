// JavaScript Document


define(function(require,exports){
	
	function hide(aBtn,asection,navSpan){
		var nownum = window.sessionStorage.getItem('navNum') || 0;
		aBtn[1].onclick = function(e){
			nownum++;
			nownum = nownum>=asection.length?0:nownum;
			hashTab();
			return false;
			
		}
		aBtn[0].onclick = function(e){
			nownum--;
			nownum = nownum<0?asection.length-1:nownum;
			// window.bBtn = false;
			hashTab();
			return false;
		}
		function hashTab(){
			window.sessionStorage.setItem('navNum',nownum);
			var hash = asection[nownum].dataset.hash;
			switch(window.location.hash.substring(1) || 'index'){ //点击时获取到的location.hash是上一个的，
				//所以给一个out让其隐藏，之后在out的js的文件中在加上把点击获取到的hash传过去，再修改window.location.hash,然后
				//重新加载show.js,
				case 'index':
					require('indexOut.js').init(asection,hash);
				break;
				case 'production':
					require('productionOut.js').init(asection,hash);
				break;
				case 'description':
					require('descriptionOut.js').init(asection,hash);
				break;
				case 'message':
					require('messageOut.js').init(asection,hash);
				break;
				case 'relax':
					require('relaxOut.js').init(asection,hash);
				break;
			}
		}
	}
	
	exports.hide = hide;
	
});
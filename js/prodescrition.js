define(function(require,exports){
	function proDescrition(aDd,oStage,proStr,_deg){
		// var oStage = document.getElementById('stage');
		// var aDd = oStage.children;
		var num = 2000;
		var oStageRotateY = 0;
		var now =0;
		// var proStr = '';
		// var prodate = require('prodata.js').prodate;
		// document.body.style.background='#000';
		// for(var i=0;i<prodate.length;i++){
		// 	proStr += '<dd><img src='+prodate[i].themeImage+' class="person-img" /><div class="person-dec"><h3 class="person-title">'+prodate[i].Title+'</h3><p class="person-content">'+prodate[i].reply+'</p></div><div class="over" style="background-image: -moz-linear-gradient(center top , rgb(0, 0, 0) 65%, rgba(255, 255, 255, 0)), url('+prodate[i].themeImage+'); opacity: 0.1;"></div></dd>'
		// }

		for(var i=0;i<aDd.length;i++){
			(function(i){
				aDd[i].onclick = function(){
					// oldNum = newNum;
					// oldLeft = aDd[oldindex].getBoundingClientRect().left;
					// console.log(oldindex ,i, oStageRotateY)
					// oldindex = i;
					// newNum = this.index;
					// newLeft = aDd[i].getBoundingClientRect().left;
					// var that = this;
					// if(newLeft>oldLeft){
					// 	oStageRotateY += -(this.index-oldNum)*(_deg);
					// }else{
					// 	oStageRotateY -= (this.index-oldNum)*(_deg);
					// }
					var that = this;
					oStageRotateY = -i*(_deg);
					oStage.style.transform = 'perspective('+num+'px) rotateX(-10deg) rotateY('+oStageRotateY+'deg)';
					oStage.style.transition = "2s";
					oStage.addEventListener('transitionend',end,false)
					function end(){
						this.removeEventListener('transitionend',end,false);
						that.getElementsByTagName('h3')[0].className = 'person-title step'
					}
				}
			})(i)
		}
		document.body.onmousewheel = mousefn;
		if (document.body.addEventListener) {
			document.body.addEventListener('DOMMouseScroll', mousefn, false);
		}
		function mousefn(ev){
			var e = ev||event;
			var direct = true;
			if(e.wheelDelta){
				direct = e.wheelDelta > 0 ? true : false;
			}else{
				direct = e.detail<0 ? true : false
			}
			if(direct){
				if( num > 350 )
				{

					num -= 150;
				};			
			}else{
				if( num < 4000 )
				{
					num += 150;
				};
			}
			oStage.style.transform = 'perspective('+num+'px) rotateX(-10deg) rotateY('+oStageRotateY+'deg)';
		}
		function getLeft(obj){
			var iLeft = '';
			if(obj){
				iLeft += obj.offsetLeft;
				obj = obj.offsetParent;
			}
			return iLeft;
		}
		window.bBtn = true;
	}
	exports.proDescrition = proDescrition;
})
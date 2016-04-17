define(function(require,exports){
	function skill(){
		var oWrap = document.getElementById('wrap');
	    var aImg = oWrap.getElementsByTagName('img');
	    var iMax = aImg.length;
	    oWrap.onmousemove=function(ev)
	    {
	        var iX=parseInt(ev.clientX);
	        var iY=parseInt(ev.clientY);
	        var iOld=parseInt(getStyle(this,"WebkitPerspectiveOrigin"));
	        var iTimer=Math.abs(iOld-iX);
	        iTimer=iTimer<30?0:parseInt(iTimer);
	        this.style.transition=iTimer+"ms";
	        this.style.WebkitPerspectiveOrigin=iX+"px"+" "+iY+"px";
	        this.style.MozPerspectiveOrigin=iX+"px"+" "+iY+"px";
	    };
	    //获取到元素计算后的样式
	    function getStyle(obj,attr){
	        if(obj.currentStyle){
	            return obj.currentStyle[attr]
	        }else{
	            return getComputedStyle(obj)[attr]
	        }
	    }
	}
	exports.skill = skill;
})
	

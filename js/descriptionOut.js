define(function(require,exports){
	
	function init(asection,hash){
		for(var i=0;i<asection.length;i++){
			if( asection[i].dataset.hash == 'description' ){
				window.location.hash = hash;
				require('show.js').show(asection)	
			}
		}
	}
	exports.init = init;
	
});
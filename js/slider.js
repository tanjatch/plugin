(function($){
	var sliderUL=$('div.slider').css('overflow', 'hidden').children('ul'),
	imgs=sliderUL.find('img'),
	imgWidth=imgs.first().width(),
	imgsLen=imgs.length,//4
	
	current=1,
	totalImgsWidth=imgsLen*imgWidth;
console.log(imgsLen);
	
$('#slider-nav').show().find('button').on('click',function(){
		var direction=$(this).data('dir');
			loc=imgWidth;
		
		//update current value
		(direction=='next')? ++current:--current;
		// if(direction=='next'){
			// current=current+1;
		// } else{
			// current=current-1;
		// }
		
		//if first images
		if(current===0){
			current=imgsLen;
			direction='next';
			loc=totalImgsWidth-imgWidth;
		} else if(current-1===imgsLen){//are we at end? should we reset?
			current=1;
			loc=0;
			
		}

		transition(sliderUL,loc,direction);
		
      // console.log('clicked');

});

function transition(container,loc,direction){
    var unit;//-= +=
if(direction&&loc!==0){
	unit=(direction==='next')?'-=':'+=';
}

	container.animate({
	//if unit then +=600, else 0
		'margin-left':unit?(unit+loc):loc
		
		
	});

}
})(jQuery);
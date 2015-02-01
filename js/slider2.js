(function(){

var container=$('div.slider').css('overflow', 'hidden').children('ul'),
	slider=new Slider(container,$('#slider-nav'));
	
slider.nav.find('button').on('click',function(){

	slider.setCurrent($(this).data('dir'));
	slider.transition();

});


})();
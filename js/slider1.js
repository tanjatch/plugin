function Slider(container,nav){
	this.container=container;
	this.nav=nav.show();//för att visa buttons
	this.imgs=this.container.find('img');
	this.imgWidth=this.imgs[0].width;
	this.imgsLen=this.imgs.length,//4
	this.current=0;
	
	}
	Slider.prototype.transition=function(coords){
		this.container.animate({
			'margin-left':coords||-(this.current*this.imgWidth)
		
		});
		
	};
	// var slider=new Slider($('div.slider'),$('#slider-nav'));
	// console.log(slider.container);
	Slider.prototype.setCurrent=function(dir){
		
		var pos=this.current;
		 // if(dir==='next'){
			 // pos++;
		 // }else{
			// pos--;
		 // }
		//eller
		pos+=(~~(dir==='next')||-1);//~~betyder att man får värdet 1 om det är sant eller 0 om det är falskt,  eller kommer den att få -1
		
		this.current=(pos<0)? this.imgsLen-1: pos%this.imgsLen;
		console.log(this.current);
		return pos;
	};
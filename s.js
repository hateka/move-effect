(function($){
	$.fn.float = function(config,distanse){

	var styles = {
		left:"",
		top:"",
	}
	var option = $.extend(styles,config);
	
	$(this).mouseover(function(){
		var p = $(this).offset();
		styles.left = p.left;
		styles.top = p.top;
		var elem = $("<div>");
		var para = $("<p>");
		var t = $(this).children($("section"));
		for(var i in styles){
			elem.css(i,styles[i]);
		}
                for(var i in option.text){
                  if(i == $(this).attr('id')){
         	    para.text(option.text[i]);
                  }
                }

		elem.addClass("hoverIcon");
		elem.append(para);
		$(this).append(elem);
		boxleft($(this),elem,t);
		elem.animate({"top": "+="+distanse+"px"}, "slow");
       		$(this).unbind('mouseenter mouseleave');
	}).mouseout(function(){
		$(".hoverIcon").remove();
		var t = $(this).children($("section"));
		t.removeAttr("style");
		$(this).removeAttr("style");
	});

        function boxleft(b,elem,t){
		if((b.width()+elem.width())>700){
		  return;
		}
		b.css("width",b.width()+elem.width());
		t.css("width",b.width()-(elem.width()*1.2));
		t.css("position","relative");
		t.css("left",elem.width()+20);
        }


	};

})(jQuery);
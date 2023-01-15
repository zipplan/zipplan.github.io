$( document ).ready(function() {
	// Modal Image
	$( "img[name^='img_']" ).on( "click", function() {
		var thisname = this.name;
		thisname = thisname.replace('img_', '');
		thisname = 'mdiv_'.concat(thisname);
		$( "div[name='"+ thisname + "']" ).css("display", "block");
		$( "body" ).css("overflow-y", "hidden");
	  });
	  $( "div.modal > img" ).on("mousewheel",function(event){
		var width_percent = parseInt(this.style.width.replace("%", "").trim());
		if (isNaN(width_percent))
		{
			width_percent = 40;
		}
        if(event.originalEvent.deltaY < 0){
			width_percent += 10;
        }else if(event.originalEvent.deltaY > 0){
			width_percent -= 10;
        }
		if (width_percent <= 40)
		{
			width_percent = 40;
		}
		else if (width_percent >= 100)
		{
			width_percent = 100;
		}
		this.style.width = `${width_percent}%`;
    });
	$( "div.modal > img" ).mousedown(function(event){
		var width_percent = parseInt(this.style.width.replace("%", "").trim());
		if (isNaN(width_percent))
		{
			width_percent = 40;
		}
		switch (event.which) {
			case 1:
				width_percent += 10;
				break;
			case 2:
				width_percent = 40;
				break;
			case 3:
				event.preventDefault();
				width_percent -= 10;
				break;
			default:
				break;
		}
		if (width_percent <= 40)
		{
			width_percent = 40;
		}
		else if (width_percent >= 100)
		{
			width_percent = 100;
		}
		this.style.width = `${width_percent}%`;
	});
	$( "div.modal > span" ).on( "click", function() {
		this.parentNode.style.display = "none";
		$( "div.modal > img" ).css("width", "40%");
		$( "div.modal > img" ).css("img_init", "0");
		$( "div.modal > img" ).css("cursor", "zoom-in");
		$( "body" ).css("overflow-y", "auto");
	  });
	
	// Link Preview
	document.querySelectorAll('webhighlights-link-preview').
		forEach(element => element.addEventListener('click', () => window.open(element.getAttribute('url'), "_blank")));
	
	

});

$(document).keydown(function(e) {
	if (e.key === "Escape") { // escape key maps to keycode `27`
		$( "div[name^='mdiv_']" ).css("display", "none");
		$( "div.modal > img" ).css("width", "40%");
		$( "div.modal > img" ).css("img_init", "0");
		$( "div.modal > img" ).css("cursor", "zoom-in");
		$( "body" ).css("overflow-y", "auto");
   }
});

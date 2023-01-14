$( document ).ready(function() {
	// Modal Image
	$( "img[name^='img_']" ).on( "click", function() {
		var thisname = this.name;
		thisname = thisname.replace('img_', '');
		thisname = 'mdiv_'.concat(thisname);
		$( "div[name='"+ thisname + "']" ).css("display", "block");
	  });
	$( "div.modal > img" ).on("click", function() {
		if (this.style.width == "40%" || this.style.img_init == "0")
		{
			this.style.img_init = "1";
			this.style.width = "60%";
			this.style.cursor = "zoom-in";
		}
		else if (this.style.width == "60%")
		{
			this.style.width = "80%";
			this.style.cursor = "zoom-in";
		}
		else if (this.style.width == "80%")
		{
			this.style.width = "100%";
			this.style.img_init == "0";
			this.style.cursor = "zoom-out";
		}
		else if (this.style.width == "100%")
		{
			this.style.width = "40%";
			this.style.cursor = "zoom-in";
		}
		else
		{
			this.style.width = "60%";
			this.style.cursor = "zoom-in";
		}
	  });
	$( "div.modal > span" ).on( "click", function() {
		this.parentNode.style.display = "none";
		$( "div.modal > img" ).css("img_size", "base");
		$( "div.modal > img" ).css("width", "60%");
	  });
	
	document.querySelectorAll('webhighlights-link-preview').
		forEach(element => element.addEventListener('click', () => window.open(element.getAttribute('url'), "_blank")));
	
});

$(document).keydown(function(e) {
	if (e.key === "Escape") { // escape key maps to keycode `27`
		$( "div[name^='mdiv_']" ).css("display", "none");
   }
});

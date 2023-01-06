$( document ).ready(function() {
	// Modal Image
	$( "img[name^='img_']" ).on( "click", function() {
		var thisname = this.name;
		thisname = thisname.replace('img_', '');
		thisname = 'mdiv_'.concat(thisname);
		$( "div[name='"+ thisname + "']" ).css("display", "block");
	  });
	$( "div.modal > span" ).on( "click", function() {
		this.parentNode.style.display = "none";
	  });
	// Intensify all images on the page.
	if ("ontouchstart" in document.documentElement)
	{
	// content for touch-screen (mobile) devices
	}
	else
	{
		var element = document.querySelectorAll( '.modal-content' );
		Intense( element );
	}
});

$(document).keydown(function(e) {
	if (e.key === "Escape") { // escape key maps to keycode `27`
		$( "div[name^='mdiv_']" ).css("display", "none");
   }
});

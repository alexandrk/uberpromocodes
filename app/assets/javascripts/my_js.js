$(document).ready(function(){
	ZeroClipboard.config( { moviePath: '/assets/ZeroClipboard.swf' } );
	//var client = new ZeroClipboard($(".promo_code"));

	$('#getAppBtn').on('click', function(e){
		mixpanel.track("Get App Button Click");
	})
});
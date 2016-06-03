$(function() {

	$('.contact').click(function(){
	     $('.overlay').show();
	});

	$('.close').click(function(){
	     $('.overlay').hide();
	});

	$('#send').click(function(){
	     $('.confirmation').show();
	});
});
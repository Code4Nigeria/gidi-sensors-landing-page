$(function() {

	$('.contact').click(function(){
	     $('.overlay').show();
	});

	$('.closed').click(function(){
	     $('.overlay').hide();
	});

	$('#send').click(function(){
	     $('.confirmation').show();
	});
});
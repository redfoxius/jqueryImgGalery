jQuery(document).ready(function() {
	var wh = jQuery(window).height(),
		ww = jQuery(window).width();
	/* setup modal window dimentions */
	if (ww > wh) {
		jQuery('#main_image_container').css('height', wh*0.7+'px').css('width', wh*1.28+'px');
		jQuery('#main_image_container').css('top', '20px').css('left', (ww - jQuery('#main_image_container').width())/2+'px');
		jQuery('#modal_body').css('width', ww*0.8+'px').css('left', (ww - jQuery('#modal_body').width())/2+'px');
	} else {
		jQuery('#main_image_container').css('width', ww*0.9+'px').css('height', ww*0.50625+'px');
		jQuery('#main_image_container').css('top', wh/8+'px').css('left', (ww - jQuery('#main_image_container').width())/2+'px');
		jQuery('#modal_body').css('bottom', wh/8+'px').css('width', ww*0.8+'px').css('left', (ww - jQuery('#modal_body').width())/2+'px');
		jQuery('a.control_tn').css('padding', '5px');
	}
	/* click thmb during grid view */
	jQuery('a.tn').each(function() {
		jQuery(this).click(function() {
			loadMain(jQuery(this).data('index'));
			loadTnControl(jQuery(this).data('index'));
			//disableScroll();
			jQuery('#modal').removeClass('hidden');
		})
	});
	/* click tnmb during full preview */
	jQuery('a.control_tn').each(function() {
		jQuery(this).click(function() {
			loadMain(jQuery(this).data('index'));
			loadTnControl(jQuery(this).data('index'));
		})
	});
	/* handle left/right arrows during full preview */
	$("body").keydown(function(event) {
		if (!jQuery('#modal').hasClass('hidden')) {
			event.preventDefault();
			if (event.keyCode == 37 || event.keyCode == 40) { // left
				var targ = getPrev(jQuery('#control3').data('index'));
				loadMain(targ);
				loadTnControl(targ);
		  	} else if (event.keyCode == 39 || event.keyCode == 38) { // right
			    var targ = getNext(jQuery('#control3').data('index'));
				loadMain(targ);
				loadTnControl(targ);
		  	}   	
		}	  	
	});
	jQuery('#left').click(function() {
		var targ = getPrev(jQuery('#control3').data('index'));
		loadMain(targ);
		loadTnControl(targ);
	});
	jQuery('#right').click(function() {
		var targ = getNext(jQuery('#control3').data('index'));
		loadMain(targ);
		loadTnControl(targ);
	});
	/* close modal*/
	jQuery('#modal_wrapper').click(function() {
		//enableScroll();
		jQuery('#modal').addClass('hidden');
	});
	$(window).bind('mousewheel', function(event) {
		if (!jQuery('#modal').hasClass('hidden')) {
			event.preventDefault();
		    if (event.originalEvent.wheelDelta >= 0) {
		        var targ = getPrev(jQuery('#control3').data('index'));
				loadMain(targ);
				loadTnControl(targ);
		    }
		    else {
		        var targ = getNext(jQuery('#control3').data('index'));
				loadMain(targ);
				loadTnControl(targ);
		    }
		}
	});
})

function loadTnControl(index) {
	jQuery('#control3 img').prop('src', 'img/tn/'+index+'_tn.jpg');
	jQuery('#control3').data('index', index);
	var next = getNext(index);
	jQuery('#control4 img').prop('src', 'img/tn/'+next+'_tn.jpg');
	jQuery('#control4').data('index', next);
	var next2 = getNext(next);
	jQuery('#control5 img').prop('src', 'img/tn/'+next2+'_tn.jpg');
	jQuery('#control5').data('index', next2);
	var prev = getPrev(index);
	jQuery('#control2 img').prop('src', 'img/tn/'+prev+'_tn.jpg');
	jQuery('#control2').data('index', prev);
	var prev2 = getPrev(prev);
	jQuery('#control1 img').prop('src', 'img/tn/'+prev2+'_tn.jpg');
	jQuery('#control1').data('index', prev2);
}

function getNext(index) {
	if (jQuery('a.tn[data-index="' + (index + 1) + '"]').length > 0) {
		return index + 1;
	} else {
		return 1;
	}	
}

function getPrev(index) {
	if (jQuery('a.tn[data-index="' + (index - 1) + '"]').length > 0) {
		return index - 1;
	} else {
		return jQuery('a.tn').length;
	}
}

function loadMain(index) {
	jQuery('img.main_image').each(function() {
		jQuery(this).addClass('hidden');
	});
	if (jQuery('img.main_image[data-index="' + index + '"]').length > 0) {		
		jQuery('img.main_image[data-index="' + index + '"]').removeClass('hidden');
	} else {
		jQuery('#main_image_container').append('<img class="main_image" data-index="'+index+'" src="img/'+index+'.jpg" alt="">');
	}
}
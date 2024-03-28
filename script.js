var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
 * The script is encapsulated in an self-executing anonymous function,
 * to avoid conflicts with other libraries
 */
(function($) {


	/**
	 * Declare 'use strict' to the more restrictive code and a bit safer,
	 * sparing future problems
	 */
	"use strict";



	/***********************************************************************/
	/*****************************  $Content  ******************************/
	/**
	* + Content
	* + Appear Portfolio
	* + Captcha
	* + Carousels
	* + Collapse Icon
	* + Countdown
	* + Flickr Feed
	* + Go to Top
	* + Menu Animation
	* + Send Forms
	* + Slider Revolution
	*/


	/*************************  $Appear Portfolio  *************************/
	var $portfolioItems = $('.portfolio-item');
	
	if(jQuery().appear) {
		$portfolioItems.appear();
		$(document).ready(function() { $.force_appear(); });
	}

	$portfolioItems.on('appear', function() { $(this).addClass('show'); }) 



	/*****************************  $Captcha  ******************************/
	function genCaptcha($elm){
		var rdn1 = Math.floor( Math.random() * 6 ),
			rdn2 = Math.floor( Math.random() * 6 ),
			rdn3 = Math.floor( Math.random() * 4 ),
			word = ['zero', 'one', 'two', 'three', 'four', 'five'],
			txt = '',
			sum = rdn1 + rdn2;

		if (rdn3 == 0){ txt = rdn1 + ' + ' + rdn2; }
		else if(rdn3 == 1) {txt = word[rdn1] + ' + ' + rdn2; }
		else if(rdn3 == 2) {txt = rdn1 + ' + ' + word[rdn2]; }
		else if(rdn3 == 3) {txt = word[rdn1] + ' + ' + word[rdn2]; }

		$elm.find('label').html(txt + ' = ');
		$elm.find('input[type=hidden]').val(sum);
	}
		
	$('.form-captcha').each(function(){ genCaptcha($(this)); });
	
	
	function captcha_test($form) {
		var result = $form.find('.form-captcha input[type=hidden]').val(),
			captcha = $form.find('.form-captcha input[type=text]').val();
		
		if( result != captcha ){ return false; }
	}
	


	/***************************  $Collapse Icon  **************************/
	var $collapse = $('#accordion'),
		$heading = $collapse.find('.panel-heading');
	
	function changeIcon(e){
		var $emt = $(e.target).parents('.panel'),
			$ico = $emt.find('h4 a i'),
			evt = e.type,
			isIn = ($emt.find('.panel-collapse').hasClass('in')),
			icoClosed = 'icon-down-open-mini',	//icon when panel is close
			icoOpen   = 'icon-up-open-mini',	//icon when panel is open
			icoHover  = 'icon-plus';			//icon when panel is hover

		$ico.removeClass();
		
		if (evt == 'show'){ 				$ico.addClass(icoOpen);
		} else if (evt == 'hide'){ 			$ico.addClass(icoClosed);
		} else if (evt == 'mouseenter'){ 	$ico.addClass(icoHover);
		} else if (evt == 'mouseleave'){ 
			( isIn )? $ico.addClass(icoOpen) : $ico.addClass(icoClosed);
		}
	}
	
	$collapse.on('hide.bs.collapse', function (e){ changeIcon(e); });
	$collapse.on('show.bs.collapse', function (e){ changeIcon(e); });
	$heading.on('mouseenter', function (e){ changeIcon(e); });
	$heading.on('mouseleave', function (e){ changeIcon(e); });


	/****************************  $Countdoun  *****************************/
	if(jQuery().countdown) {
		$('#countdown').countdown({
			date: "nov 1, 2014 15:03:26",
			render: function(data) {
				var $timer = $(this.el),
					html = '';
				
				html += '<div>' + data.days + '<span>days</span></div>';
				html += '<div>' + data.hours + '<span>hours</span></div>';
				html += '<div>' + this.leadingZeros(data.min, 2) + '<span>minutes</span></div>';
				html += '<div>' + this.leadingZeros(data.sec, 2) + '<span>seconds</span></div>';

				$timer.html(html)
			}
		});
	}



	/***************************  $Flickr Feed  ****************************/
	var $flickr = $('.flickr-feed'),
		html = '';

	html += '<li>';
	html += 	'<a href="{{link}}" class="postlink">';
	html += 		'<img src="{{image_s}}" alt="{{title}}" />';
	html += 	'</a>'
	html += '</li>'

	if ( jQuery().jflickrfeed ) {
		$flickr.jflickrfeed({
			limit: 6,
			qstrings: { user_id: '5083772252' },
			itemTemplate: html
		});
	}


	/***************************  $Go to Top  ******************************/
	var $gotop = $('#go-top');
	
	function toggleGoToTop(){
		($(window).scrollTop() > 100) ? $gotop.fadeIn() : $gotop.fadeOut();
	}
	$(window).scroll( toggleGoToTop ); 
 

	function goToTop(){
		$("html, body").animate({ scrollTop: 0 }, 600);
	}
	$gotop.click( goToTop );



	/**************************  $Menu Animation  **************************/
	if ($(window).width() >= 768) {
		$('.navbar .dropdown').hover(function() {
			$(this)
					.find('.dropdown-menu')
					.first()
					.stop(true, true)
					.delay(100)
					.fadeIn()
					.slideDown('fast')
		}, function() {
			$(this)
					.find('.dropdown-menu')
					.first()
					.stop(true, true)
					.delay(250)
					.fadeOut()
					.slideUp('slow')
		});
	}



	/*****************************  $Playlist  *****************************/
	$('.playlist li a').on('click', function(e){
		
		$($(this).data('player')).attr('src', $(this).data('podcast'));
		
		$(this).parents('.playlist').find('li').removeClass('active');
		$(this).parent().addClass('active');

		e.preventDefault();
		e.stopPropagation();
	});



	/*****************************  $Popover  ******************************/
	$('[data-toggle=popover]').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
	}).popover({trigger: 'hover'});


	/**************************  $Send Forms  ******************************/
	var $form = $('form');

	$form.on( 'submit' , function(e){ 
		if ( $(this).data('ajax') == 1 ) {
			sendForm( $(this) );
			e.preventDefault();
		} 
	})

	function sendForm($form){
		var fieldsData = getFieldsData($form),
			url = $form.attr('action'),
			method = $form.attr('method');

		sendData(url, method, fieldsData, $form, showResults)
	}

	
	function getFieldsData($form) {
		var $fields = $form.find('input, button, textarea, select'),
			fieldsData = {};

		$fields.each( function(){
			var name = $(this).attr('name'),
				val  = $(this).val(),
				type = $(this).attr('type');

			if ( typeof name !== 'undefined' ){
				
				if 	( type == 'checkbox' || type == 'radio' ){

					if ( $(this).is(':checked') ){
						fieldsData[name] = val;
					}
				} else {
					fieldsData[name] = val;
				}
					
			}
		});

		return fieldsData
	}

	function sendData(url, method, data, $form, callback){
		var $btn = $form.find('[type=submit]'),
			$response = $form.find('.form-response');

		$.ajax({
			beforeSend: function(objeto){ 
				if( captcha_test($form) === false ){ 
					var err = "<div class='alert alert-danger'><a class='close' data-dismiss='alert'>×</a><strong>Warning!</strong> The sum is incorrect, please do it again.</div>";

					callback(err, $response);
					
					return false; 
				}
				$response.html('');
				$btn.button('loading'); 
			},
			complete: function(objeto, exito){ $btn.button('reset'); },
			data: data,
			success: function(dat){  callback(dat, $response); },
			type: method,
			url: url,
		});
	}

	function showResults(data, $response){
		 $response.html(data);
		 $response.find('.alert').slideDown('slow');
	}



	/***********************  $Slider Revolution  **************************/
	function startRevolution(){
		var $banner = $('#slider-revolution'),
			args = {};
		
		args = {
			startheight:560,
			startwidth:1340,
			
			fullWidth:"on",
			fullScreen:"off",

			shadow:0,

			onHoverStop: "on",

			hideThumbs:1,
			navigationType: "bullet",
			navigationArrows: "solo",
			navigationStyle: "round",

			soloArrowLeftHOffset: 0,
			soloArrowRightHOffset: 0,
		}

		if(jQuery().revolution) {
			$banner.revolution(args);
		}
	}

	$(document).ready(function() { startRevolution(); });


})(jQuery);

}
/*
     FILE ARCHIVED ON 09:53:41 Aug 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:47:04 Mar 28, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.726
  exclusion.robots: 0.11
  exclusion.robots.policy: 0.099
  cdx.remote: 0.066
  esindex: 0.009
  LoadShardBlock: 92.778 (3)
  PetaboxLoader3.datanode: 91.88 (5)
  load_resource: 226.027 (2)
  PetaboxLoader3.resolve: 177.146 (2)
*/
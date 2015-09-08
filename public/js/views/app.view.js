
// Backbone
var app = app || {};

(function ($) 
{
	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend(
	{

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#page-content',

		// Initialization
		initialize: function () 
		{
			this.setSizes();
			this.navigation();
			this.resume();
			this.postCarousel();
			this.blogSlider();
			this.portfolio();
			this.smoothScrolling();
			this.contact();
			this.animations();
			this.alpha();
			this.checkPhotos();
			this.responsiveVids();
			this.tooltipInit();
			this.popoverInit();
			this.resize();
		},

		render: function ()
		{
			// This page is rendered server-side
		},

		resize: function () 
		{
			var _this = this;

			$(window).resize(function () 
			{
				_this.setSizes();
				_this.checkPhotos();
			});
		},

		setSizes: function () 
		{
			var height    = $(window).height();
			var $logo     = $('.logo-content');
			var $profile  = $('#profile');
			var $pcontent = $('.profile-content');
			var $pinfo    = $('.project-info');
			var $contact  = $('#contact, .contact-content');

			$logo.css({'margin-top': '-' + $logo.height() / 2 + 'px'});
			$profile.css({'height': height + 'px'});
			$pcontent.css({'margin-top': '-' + $pcontent.height() / 2 + 'px'});
			$pinfo.css({'margin-top': '-' + $pinfo.height() / 2 + 'px'});
			$contact.css({'min-height': height + 'px'});
		},

		navigation: function ()
		{
			var $section = $('#page-content section');
			$section.waypoint(function (direction) 
			{
				if (direction === 'down') 
				{
					var menuLink    = $('.me-nav li').children('a').attr('href');
					var activeLink  = $('.me-nav li.active');
					var newLink     = $('li.menu-item a[href="#' + $(this).attr('id') + '"]');

					$(activeLink).removeClass('active');
					$(newLink).parent('li').addClass('active');
				}
			},
			{ offset: + 100 });
			
			$section.waypoint(function (direction) 
			{
				if (direction === 'up') 
				{
					var menuLink    = $('.me-nav li').children('a').attr('href');
					var activeLink  = $('.me-nav li.active');
					var newLink     = $('li.menu-item a[href="#' + $(this).attr('id') + '"]');

					$(activeLink).removeClass('active');
					$(newLink).parent('li').addClass('active');
				}
			},
			{ 
				offset: function () 
				{
					return -$(this).height() + 100;
				}
			});
		},

		resume: function ()
		{
			$('.dimmed-effect .resume-box')
				.mouseenter(function ()
				{
					$('.dimmed-effect .resume-box').not(this).each(function () 
					{
						$(this).addClass('disable');
					});
				})
				.mouseleave(function ()
				{
					$('.dimmed-effect .resume-box').each(function () 
					{
						$(this).removeClass('disable');
					});
				});
		},

		postCarousel : function ()
		{
			$(".post-carousel").owlCarousel(
			{
				// Most important owl features
				items : false,
				itemsCustom : [[1600,3],[991,2],[0,1]],
				itemsDesktop : false,
				itemsDesktopSmall : false,
				itemsTabletSmall: false,
				itemsMobile : false,
				singleItem : false,
				itemsScaleUp : false,
				slideSpeed : 600,
				paginationSpeed : 800,
				rewindSpeed : 1000,
				navigation : false,
				scrollPerPage : true,
				pagination : true,
				theme : "carousel-theme"
			});
			
			var owl = $(".owl-carousel").data('owlCarousel');
			
			$('.post-carousel-next').on('click', function () 
			{
				owl.next();
				return false;
			});
			
			$('.post-carousel-prev').on('click', function () 
			{
				owl.prev();
				return false;
			});
		},

		blogSlider : function ()
		{
			$(".blog-slider").owlCarousel(
			{
				// Most important owl features
				items : false,
				itemsCustom : false,
				itemsDesktop : false,
				itemsDesktopSmall : false,
				itemsTabletSmall: false,
				itemsMobile : false,
				singleItem : true,
				itemsScaleUp : false,
				slideSpeed : 600,
				paginationSpeed : 800,
				rewindSpeed : 1000,
				navigation : false,
				scrollPerPage : true,
				pagination : true,
				autoPlay: true,
				theme : "slider-theme"
			});
		},

		portfolio: function ()
		{
			$('body').on('click', 'ajax-portfolio-link', function () 
			{
				loadContent($(this).attr('href'));
				$('html, body').animate({scrollTop:$('.project-content').position().top}, 700);
				return false;
			});

			function loadContent (href) 
			{　
				var $content = $('.project-content');
				$content.on('load', href, function ()
				{
					$content.slideUp(700, function () 
					{ 
						$content.slideDown(700, function () 
						{ 
							$.waypoints('refresh') 
						}); 
					});
				});
			}
		},

		smoothScrolling : function ()
		{
			$.localScroll({});
		},

		contact: function ()
		{
			var $holder  = $('#contact-form-holder');
			var $trigger = $('.contact-form-trigger');
			$holder.addClass('form-hidden');

			$('body').on('click', '.contact-form-trigger', function () 
			{
				if($holder.hasClass('form-hidden')) 
				{
					$holder.removeClass('form-hidden').addClass('form-visible');
					$trigger.addClass('active');
				} 
				else if($holder.hasClass('form-visible')) 
				{
					$holder.removeClass('form-visible').addClass('form-hidden');
					$trigger.removeClass('active');
				};
			});

			var $contactForm  = $('#contact-form');

			$contactForm.validate(
			{
				rules: 
				{
					name: 
					{
						required    : true,
						minlength   : 1
					},
					email: 
					{
						required    : true,
						email       : true
					},
					message: 
					{
						required    : true,
						minlength   : 10
					}
				},
				messages: 
				{
					name: 
					{
						required    : "Please enter your name."
					},
					email: 
					{
						required    : "Please enter your email address."
					},
					message: 
					{
						required    : "Please enter a message."
					}
				}
			});

			// Send the email
			$contactForm.submit(function ()
			{
				var success = '<strong>Success!</strong> Your message was sent.';
				var error   = '<strong>Error!</strong> Your message was not sent - try again later...';
				var response;
				if ($contactForm.valid())
				{
					$.ajax(
					{
						type : 'POST',
						url  : 'php/contact-form.php',
						data : $(this).serialize(),
						success: function (msg) 
						{
							if (msg === 'SEND')
								response = '<div class="alert alert-success">' + success + '</div>';
							else
								response = '<div class="alert alert-warning">' + error + '</div>';

							$('.alert-error, .alert-success').remove();
							$contactForm.prepend(response);
						}
					 });
					return false;
				}
				return false;
			});
		},

		animations: function ()
		{
			$('.animated').appear();

			$('.fade-in').appear(function () 
			{
				$(this).each(function () { $(this).addClass('fade-in-animation') });
			});
			
			$('.fade-in-left').appear(function () 
			{
				$(this).each(function () { $(this).addClass('fade-in-left-animation') });
			});
			
			$('.fade-in-right').appear(function () 
			{
				$(this).each(function () { $(this).addClass('fade-in-right-animation') });
			});
			
			$('.slide-in-left').appear(function () 
			{
				$(this).each(function () { $(this).addClass('slide-in-left-animation') });
			});
			
			$('.slide-in-right').appear(function () 
			{
				$(this).each(function () { $(this).addClass('slide-in-right-animation') });
			});
			
			$('.slide-in-top').appear(function () 
			{
				$(this).each(function () { $(this).addClass('slide-in-top-animation') });
			});
			
			$('.slide-in-bottom').appear(function () 
			{
				$(this).each(function () { $(this).addClass('slide-in-bottom-animation') });
			});
			
			$('.zoom-in').appear(function () 
			{
				$(this).each(function () { $(this).addClass('zoom-in-animation') });
			});
			
			$('.zoom-out').appear(function () 
			{
				$(this).each(function () { $(this).addClass('zoom-out-animation') });
			});
			
			$('.bounce-in').appear(function () 
			{
				$(this).each(function () { $(this).addClass('bounce-in-animation') });
			});
			 
			$('.flip-in').appear(function () 
			{
				$(this).each(function () { $(this).addClass('flip-in-animation') });
			});
		},

		alpha: function ()
		{
			$('.editable-alpha').css(
			{
				'opacity': ($('.editable-alpha').attr('data-alpha') / 100)
			});
		},

		checkPhotos: function () 
		{
			var $imgs = $('#profile-bg img, .page-title-bg img, .blog-slide-photo img');

			if ($imgs.height() < $imgs.parent().height()) 
			{
				$imgs.removeClass('too-slim');
				$imgs.addClass('too-short');
			}
			if ($imgs.width() < $imgs.parent().width())  
			{
				$imgs.removeClass('too-short');
				$imgs.addClass('too-slim');
			}
		},

		responsiveVids: function ()
		{
			$('body').fitVids();
		},

		tooltipInit: function ()
		{
			$("[rel='tooltip']").tooltip();
		},

		popoverInit: function () 
		{
			$("[rel='popover']").popover();
		}
	});

})(jQuery);

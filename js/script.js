/**
 * Created by Kirill on 28.09.2016.
 */
$(document).on('ready', function () {

	youtubePlayer('.advantage__item_first', 'https://www.youtube.com/embed/roPXZfat_YQ?start=113&end=133&loop=1&playlist=roPXZfat_YQ');
	youtubePlayer('.advantage__item_second', 'https://www.youtube.com/embed/DOarIqLGiDQ?start=82&end=90&loop=1&playlist=DOarIqLGiDQ');
	youtubePlayer('.advantage__item_third', 'https://www.youtube.com/embed/4Ko0Yn5J-jM?start=62&loop=1&playlist=4Ko0Yn5J-jM');
	youtubePlayer('.advantage__item_fourth', 'https://www.youtube.com/embed/4Ko0Yn5J-jM?start=62&loop=1&playlist=4Ko0Yn5J-jM');

	main();

	// $(".demo").customScrollbar();
	// $("#fixed-thumb-size-demo").customScrollbar({fixedThumbHeight: 50, fixedThumbWidth: 60});



	$(".scroll-bar-menu").customScrollbar({
		skin: "default-skin",
		hScroll: false,
		updateOnWindowResize: true
	})

	function youtubePlayer (block, link) {
		var videoSetting = "&modestbranding=1&showinfo=0&controls=0&autoplay=1";
		$( block ).hover(
			function() {
				$(this).find('.video-advantage')[0].src += link;
				$(this).find('.video-advantage')[0].src += videoSetting;
			},
			function () {
				$(this).find('.video-advantage').removeAttr('src');
			}
		);
	}




	$('.slider-new-car').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		prevArrow: $('.prev-btn-car'),
		nextArrow: $('.next-btn-car'),
		fade:true,
		adaptiveHeight: true,
		draggable: false
	});

	$('.slider-img-car').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		draggable: false
	});
	$('.top-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		centerMode:false
	});

	$('.slide-car1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.img-slide-car1'
	});
	$('.img-slide-car1').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slide-car1',
		dots: false,
		responsive: [
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
	$('.slide-car2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.img-slide-car2'
	});
	$('.img-slide-car2').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slide-car2',
		dots: false,
		responsive: [
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
	$('.slide-car3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.img-slide-car3'
	});
	$('.img-slide-car3').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slide-car3',
		dots: false,
		responsive: [
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
	$('.slide-car4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.img-slide-car4'
	});
	$('.img-slide-car4').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slide-car4',
		dots: false,
		responsive: [
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});



	/* Открытие меню */

	function main() { //главная функция
		$('.icon-menu').click(function() { /* выбираем класс icon-menu и
		 добавляем метод click с функцией, вызываемой при клике */
			$('.menu').animate({ //выбираем класс menu и метод animate
				left: '0px' /* теперь при клике по иконке, меню, скрытое за
				 левой границей на 285px, изменит свое положение на 0px и станет видимым */
			}, 200); //скорость движения меню в мс
			$('main').animate({ //выбираем тег body и метод animate
				left: '320px' /* чтобы всё содержимое также сдвигалось вправо
				 при открытии меню, установим ему положение 285px */
			}, 200); //скорость движения меню в мс
			$('body').css(
				{
					'overflow-y': 'hidden'
				}
			);
		});

		/* Закрытие меню */
		$('.icon-close').click(function() { //выбираем класс icon-close и метод click
			$('.menu').animate({ //выбираем класс menu и метод animate
				left: '-320px' /* при клике на крестик меню вернется назад в свое
				 положение и скроется */
			}, 200); //скорость движения меню в мс
			$('main').animate({ //выбираем тег body и метод animate
				left: '0px' //а содержимое страницы снова вернется в положение 0px
			}, 200); //скорость движения меню в мс
		});
	};

});



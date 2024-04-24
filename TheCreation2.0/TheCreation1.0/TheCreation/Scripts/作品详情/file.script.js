/* @script.js文件 */

$(document).ready(function () {
	// Layout
	if ($.browser.msie && $.browser.version === '6.0') {
		mkhover('.m-pager a', 'hover');

		// logo
		if ($('.logoimg img').width() < 500) {
			$('.logoimg img').css({
				'width': 'auto',
				'visibility': 'visible'
			});
		} else {
			$('.logoimg img').css({
				'width': 500,
				'visibility': 'visible'
			});
		}

		// min-width:1000px
		/*$(window).resize(function bodySize(){
			var bWidth = ( $(window).width() <= 1000 ) ? 1000 : '100%';
			$('body').width(bWidth);
		});
		bodySize();*/
	}
	if ($.browser.msie && $.browser.version === '10.0') {
		$('html').addClass('ie10');
	}

	if ($('body').hasClass('p-homepage')) {
		//calListSize();
		//$(window).resize(calListSize);
	}

	// search
	$('#j-lnksch').bind('click', function () {
		$(this).css('visibility', 'hidden').parent().addClass('m-schshow');
		setTimeout(function () {
			$('#j-schform .txt').focus();
		}, 300);
		return false;
	});
	$('#j-schform .txt').bind('blur', function () {
		$('.m-sch').removeClass('m-schshow');
		setTimeout(function () {
			$('#j-lnksch').css('visibility', 'visible');
		}, 300);
		return false;
	});
});

function mkhover(obj, newclass) {
	$(obj).hover(function () {
		$(this).addClass(newclass);
	}, function () {
		$(this).removeClass(newclass);
	});
}

function calListSize() {
	$('.m-postlst').css('visibility', 'hidden');

	var pWidth = 400;
	var n = Math.floor(($('body').width() - 80) / (pWidth + 30));
	if ($.browser.msie && $.browser.version === '6.0') {
		n = Math.floor(($(window).width() - 80) / (pWidth + 30));
	}

	var PLWidth = (pWidth + 30) * n;
	//alert(n);
	$('.m-postlst').css({
		'width': PLWidth,
		'visibility': 'visible'
	});
}

// (function () {
// 	$('.chat-msg-text').bind('contextmenu', function (ct) {
// 		ct.preventDefault();
// 		context = $('.context-menu');

// 		dw = parseInt($(window).width());
// 		dh = parseInt($(window).height());
// 		ctw = parseInt(ct.pageX);
// 		cth = parseInt(ct.pageY);

// 		objw = context.width() + 5;
// 		objh = context.height() + 5;

// 		context.hide();
// 		$('h1').remove();

// 		if (dw - ctw < objw) {
// 			context
// 				.css('position', 'absolute')
// 				.css('top', ct.pageY + 'px')
// 				.css('left', dw - objw + 'px')
// 				.slideToggle();
// 		} else if (dh - cth < objh) {
// 			context
// 				.css('position', 'absolute')
// 				.css('top', dh - objh + 'px')
// 				.css('left', ct.pageX + 'px')
// 				.slideToggle();
// 		} else {
// 			context
// 				.css('position', 'absolute')
// 				.css('top', ct.pageY + 'px')
// 				.css('left', ct.pageX + 'px')
// 				.slideToggle();
// 		}
// 	});

// 	$(document).bind('click', function () {
// 		context.hide();
// 	});
// })();
const chatMsgTexts = document.querySelectorAll('.chat-msg-text');

chatMsgTexts.forEach(chatMsgText => {
	chatMsgText.oncontextmenu = function (e) {
		e.preventDefault();
		if (!document.getElementById('right-menu').contains(e.target)) {
			document.getElementById('right-menu').style.top = e.pageY + 'px';
			document.getElementById('right-menu').style.left = e.pageX + 'px';

			document.getElementById('right-menu').style.display = 'block';
		}
	};

	window.addEventListener('click', function (e) {
		if (!document.getElementById('right-menu').contains(e.target)) {
			document.getElementById('right-menu').style.display = 'none';
		} else {
			document.getElementById('right-menu').style.display = 'none';
		}
	});
});

// window.oncontextmenu = function (e) {
// 	e.preventDefault();
// 	if (!document.getElementById('right-menu').contains(e.target)) {
// 		document.getElementById('right-menu').style.top = e.clientY + 'px';
// 		document.getElementById('right-menu').style.left = e.clientX + 'px';

// 		document.getElementById('right-menu').style.display = 'block';
// 	}
// };

// window.addEventListener('click', function (e) {
// 	if (!document.getElementById('right-menu').contains(e.target)) {
// 		document.getElementById('right-menu').style.display = 'none';
// 	}
// });

// $(function() {
//     var $window = $(window);
//     var $header = $('#banner');
//     var updateBackgroundPosition = function(e) {
//         scrollPosition = $window.scrollTop();
//         $header.css({'background-position': "0px -" + (scrollPosition - 100) + "px"});
//     };
//     $window.scroll(updateBackgroundPosition);
// });


function() {
	var header = document.getElementById("banner"), h = header.style;
	
	var updateBackgroundPosition = function(e) {
		scrollPosition = window.scrollTop;
		h.backgroundPosition = "0px -" + (scrollPosition - 100) + "px"};
	};
	window.scroll(updateBackgroundPosition);
};
var TIMER= (function () {
	var current, destination,t;
	var clock;

	function sel(d) {
		return document.querySelector(d);
	}

	function getCurrentTime() {
		return new Date();
	}


	function init(date) {
		destination = date;
		current = getCurrentTime();
		t = destination - current;
		$(document).ready(function() {
			clock = $('.clock').FlipClock({
		        clockFace: 'DailyCounter',
		        autoStart: false,
		        callbacks: {
		        	// stop: function() {
		        	// 	$('.message').html('The clock has stopped!')
		        	// }
		        }
		    });
				    
		    clock.setTime(t/1000);
		    clock.setCountdown(true);
		    clock.start();

		});
		
	}


	return {
		initialize: init
	}
})();
TIMER.initialize(new Date(2019,2,7));

		
		

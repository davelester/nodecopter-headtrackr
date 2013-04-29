var arDrone = require('ar-drone'),
		drone = arDrone.createClient();

exports.home = function(request, response) {
	return response.render('home.html');
}

exports.takeoff = function(request, response) {
	drone.takeoff();
}

exports.turnleft = function(request, response) {
	// execute the nodejs command to turn this
	drone
	  .after(5, function() {
	    this.clockwise(0.5);
	  })
	  .after(3000, function() {
	    // this.stop();
	});
}

exports.hover = function(request, response) {
	drone.stop();
}
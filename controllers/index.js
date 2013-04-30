var arDrone = require('ar-drone'),
		drone = arDrone.createClient();

exports.home = function(request, response) {
	return response.render('home.html');
}

exports.takeoff = function(request, response) {
	drone.takeoff();
	console.log('drone takeoff');
}

exports.turnleft = function(request, response) {
	drone.clockwise(0.5);
	console.log('turn clockwise');
}

exports.turnright = function(request, response) {
	drone.counterClockwise(0.5);
	console.log('turn counterclockwise');
}

exports.hover = function(request, response) {
	drone.stop();
	console.log('stop the drone');
}
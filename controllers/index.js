var arDrone = require('ar-drone');
var drone  = arDrone.createClient();

exports.home = function(request, response) {
	return response.render('home.html');
}

exports.turnleft = function(request, response) {
	// execute the nodejs command to turn this
	drone.clockwise(1);
	console.log('turning left!')
}

exports.hover = function(request, response) {
	drone.stop()
}
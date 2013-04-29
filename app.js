var express = require('express'),
    http = require('http'),
    path = require('path');
    nunjucks = require('nunjucks'),
    env = new nunjucks.Environment(new nunjucks.FileSystemLoader('views')),
    arDrone = require('ar-drone');

var drone = arDrone.createClient();

var app = express();
env.express(app);

app.set('port', process.env.PORT || 3000);
app.set('env', env);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'static')));

// Routes
const index = require('./controllers/index');
app.get('/', index.home);
app.get('/turnleft', index.turnleft)
app.get('/hover', index.hover)

var server = http.createServer(app);

drone.takeoff();

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
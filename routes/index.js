// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log('hello ' + data);
	res.render('index', data);
};
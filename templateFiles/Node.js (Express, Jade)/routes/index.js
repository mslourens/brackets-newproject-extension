exports.home = function(req, res){
	res.render('index', { title: 'Node.js (Express, Jade)' });
};
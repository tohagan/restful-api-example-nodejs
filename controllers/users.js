var users = require(__dirname + '/../config/models').users;
var page_size = 10;

exports.list = function(req, res){
  var page = parseInt(req.query.p) || 0;
  users.findAll({ offset: (page * page_size), limit: page_size }).success(function(users) {
    res.jsonp({
           page: page,
      page_size: page_size,
          links: [{ href: 'http://localhost:3000/users?p=' + (page + 1), rel: 'next_page' }],
         result: users
    });
  });
};

exports.show = function(req, res){
  users.find({ where: { id: req.params.id }}).success(function(user) {
    res.jsonp(user);
  })
};

exports.create = function(req, res) {
  users.create({
    username: req.body.username,
    realname: req.body.realname,
    email: req.body.email
  }).success(function(user) {
    res.jsonp(201, user);
  }).error(function(errors) {
    res.jsonp(400, { error: errors.message});
  });
};

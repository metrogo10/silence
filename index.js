var express = require('express'),
  pug = require('pug'),
  bodyParser = require('body-parser'),
  route = require('./routes/routes.js'),
  expressSession = require('express-session'),
  path = require('path');

var app = express();

var checkAuth = function(req, res, next) {
  if(req.session.user && req.session.user.isAuthenticated){
    next();
  }else{
    res.redirect('/');
  }
}

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname+'/public')));

app.use(expressSession({
  secret: 'Whatever54321',
  saveUninitialized: true,
  resave: true
}));

var urlencodedParser = bodyParser.urlencoded({extended: false});

// app.get('/', function(req, res){
//   res.render('graphs');
// });

// app.get('/public', function(req, res){
//   res.render('public');
// });

// app.get('/create', function(req, res){
//   res.render('create');
// });

// app.get('/graphs', function(req, res){
//   res.render('graphs');
// });

// app.get('/private', checkAuth, function(req, res){
//   res.render('private');
// });


app.get('/', route.graphs);
app.get('/loginpage', route.loginpage);
app.get('/admin',route.checkAuth, route.admin);
//  app.get('/admin', route.admin);
app.get('/create', route.create);
app.get('/edit/:id', route.edit);
app.get('/details/:id', route.details);
app.post('/create', urlencodedParser, route.createPerson);
app.post('/edit/:id', urlencodedParser, route.editPerson);
app.get('/delete/:id', route.delete);
app.post('/loginpage', urlencodedParser, route.login);


app.get('/logout', function(req, res){
  req.session.destroy(function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect('/loginpage');
    }
  });
});


// app.get('/', function(req,res){
//   req.session.name = req.session.name || new Date().toUTCString();
//   console.log(req.sessionID);
//   res.send(req.session.name);
//  });

// app.post('/login',urlencodedParser, function(req, res){
//   console.log(req.body.username);
//   if(req.body.username=='user' && req.body.pass=='password'){
//     req.session.user={
//       isAuthenticated: true,
//       username: req.body.username
//     };
//     res.redirect('/private');
//   }else{
//     res.redirect('/');
//   }
  
// });

app.listen(3000);
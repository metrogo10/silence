var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/data');
var promise = mongoose.connect('mongodb://localhost/data', {useMongoClient: true,});
var bcrypt = require('bcrypt-nodejs');
var myHash;

var expressSession = require('express-session');


var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {

});

var answerSchema = mongoose.Schema({
   ans1clicked:Number,
   ans2clicked:Number,
   ans3clicked:Number,
   ans4clicked:Number,
   ans5clicked:Number,
   ans6clicked:Number,
   ans7clicked:Number,
   ans8clicked:Number,
   ans9clicked:Number,
   ans10clicked:Number,
   ans11clicked:Number,
   ans12clicked:Number,
   q1att:Number,
   q2att:Number,
   q3att:Number,

});

var nums = mongoose.model('Numbers_Collection', answerSchema);

var n = new nums;




var personSchema = mongoose.Schema({
  username: String,
  age: String,
  userLevel: String,
  email: String,
  password: String,
  PasswordSalt: String,
  q1textbox: String,
  q2textbox: String,
  q3textbox: String

});


var Person = mongoose.model('People_Collection', personSchema);



exports.index = function (req, res) {
  Person.find(function (err, person) {
    if (err) return console.error(err);
    res.render('index', {
      title: 'Users List',
      people: person
    });
  });
};

exports.create = function (req, res) {
  res.render('create', {
    title: 'Add User'
  });
};

exports.graphs = function (req, res) {
  res.render('graphs', {
    title: 'Graphs Page'
  });
};

exports.loginpage = function (req, res) {
  res.render('login', {
    title: 'Login Page'
  });
};

exports.createPerson = function (req, res) {

  var person = new Person({
    username: req.body.UserName,
    age: req.body.age,
    email: req.body.Email,
    userLevel: req.body.userLevel,
    password: makeHash(req.body.Password),
    q1textbox: req.body.q1textbox,
    q2textbox: req.body.q2textbox,
    q3textbox: req.body.q3textbox
  });
  person.save(function (err, person) {
    if (err) return console.error(err);
    console.log(req.body.UserName + ' added');
    console.log(req.body.Password + ' pass');
  });
  res.redirect('/');
};

exports.edit = function (req, res) {
  Person.findById(req.params.id, function (err, person) {
    if (err) return console.error(err);
    res.render('edit', {
      title: 'Edit User',
      person: person
    });
  });
};

exports.editPerson = function (req, res) {
  Person.findById(req.params.id, function (err, person) {
    if (err) return console.error(err);
    person.username = req.body.UserName;
    person.age = req.body.age;
    person.email = req.body.Email;
    person.userLevel = req.body.userLevel;
    person.q1textbox = req.body.q1textbox;
    person.q2textbox = req.body.q2textbox;
    person.q3textbox = req.body.q3textbox;
    person.save(function (err, person) {
      if (err) return console.error(err);
      console.log(req.body.UserName + ' updated');
    });
  });
  res.redirect('/admin');

};

exports.delete = function (req, res) {
  Person.findByIdAndRemove(req.params.id, function (err, person) {
    if (err) return console.error(err);
    res.redirect('/admin');
  });
};

exports.details = function (req, res) {
  Person.findById(req.params.id, function (err, person) {
    if (err) return console.error(err);
    res.render('details', {
      title: person.username + "'s Details",
      person: person
    });
  });
};

//push data to pug via -var(javascript in pug)

exports.login = function (req, res) {
  // Person.findById(req.params.id, function (err, person) {
  //   console.log(person.username);
  //   if (req.body.username == person.username && req.body.pass == person.password) {
  //     req.session.user = {
  //       isAuthenticated: true,
  //       username: req.body.username
  //     };
  //     if(req.body.userLevel.value == "Admin")
  //     res.redirect('/admin');
  //   } else {
  //     res.redirect('/');
  //   }

    if (req.body.username =="user" && req.body.pass == "pass") {
      req.session.user = {
        isAuthenticated: true,
        username: req.body.username
      };
      res.redirect('/admin');
    } else {
      res.redirect('/');
    }
  // });
}

exports.checkAuth = function (req, res, next) {
  if (req.session.user && req.session.user.isAuthenticated) {
    next();
  } else {
    res.redirect('/loginpage');
  }
}



exports.admin = function (req, res) {
  Person.find(function (err, person) {
    if (err) return console.log(err);
    res.render("index", {
title: "User List",
people: person
    });
  });
}

function makeHash(the_str) {
  bcrypt.hash(the_str, null, null, function (err, hash) {
    myHash = hash;
    hashDone();
  });

}

function hashDone() {
  console.log("hashdone " + myHash);
  bcrypt.compare("bacon", myHash, function (err, res) {
    console.log(res);
  });

  bcrypt.compare("veggies", myHash, function (err, res) {
    console.log(res);
  });
}

 //makeHash(document.forms["form"]["Password"]);
var express = require('express');
var router = express.Router();

router.use(express.static('./public'));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/ss', function(req, res, next) {
  res.render('ss');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

// router.get('/profile/:username', function(req, res, next) {
//   res.render('user',{user: req.params.username});
// });

router.get('/env', function(req, res, next) {
  res.render('env');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get("/error", function (req, res) {
  throw Error("Not Found");
});

router.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})


// router.listen(3000);

module.exports = router;

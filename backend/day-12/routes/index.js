var express = require('express');
var router = express.Router();
var registerInitialCheck= require('../middlewares/registerChecks');
var register= require('../controllers/register');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * 
 * @requires {emial, firstname,lastname,password,confirmPassword} -req.body
 * @description 
 * Security, performance and edge cases
 * email validate - @.com
 * level- 1
 * password validate
 * password== confirm
 * level -2 
 * Js/sql - THA
 * level- 3
 * check if email already exist
 * password hash
 * email lowercase 
 * save
 */
router.post('/register', registerInitialCheck,register);
module.exports = router;
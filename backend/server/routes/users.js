var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json( [
    {id: 1, role: 'OPERATOR'},
    {id: 2, role: 'COLLECTOR'}
  ]);
});

module.exports = router;

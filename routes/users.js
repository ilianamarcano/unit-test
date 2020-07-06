const express = require('express');
const router = express.Router();

const { multiply } = require('../controllers/users');

/* GET users listing. */
router.get('/', (req, res, next) =>{
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const result = multiply(a,b)
  res.send(`the multiplication ${a}*${b} = ${result}`);
});

module.exports = router;


import express from 'express';
var router = express.Router();

router.get('/', function(req, res) {
  res.send('this api v1');
});

export default router;
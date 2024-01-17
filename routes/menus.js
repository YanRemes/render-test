import menusDessertsRouter from './menus_desserts.js'
import express from 'express';
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('this is the list of menus: Try "desserts');
});

router.use('/desserts', menusDessertsRouter)

export default router;

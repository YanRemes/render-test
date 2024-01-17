import express from 'express';
var router = express.Router();

router.get('/', function(req, res) {
  res.send('this is the desserts menu');
});

router.get('/1', (req, res)=> {
  res.send('Chocolate cake!')
})

router.get('/2', (req, res)=> {
  try{
    // error handling
    let menuItem = 2/0
    res.send(menuItem)
  } catch(error){
    console.log(error)

    res.status(500).send('Error finding item 2 (info included for now)' + error)
  }
})

export default router;
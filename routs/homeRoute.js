const { Router } = require('express');
const homeController = require('../controller/homeController');
const router = Router();

router.get('/',homeController);
router.get('*',(req,res) => {
    res.status(404);
    res.render('error');
})
module.exports = router;

var express = require('express');
var router = express.Router();
// console.log(express);
// console.log(router.get);
router.get('/',function (req,res,next) {
    // console.log();
    res.render('/',{
        userInfo:req.userInfo
    })
});
module.exports = router;
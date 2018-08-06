const router = require('express').Router();
const User = require('../models/User');
const Product = require('../models/Product');

const passport = require('passport');


function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        console.log(req.user)
        return next()
    }else{
        res.json({message: "No tienes permiso"});
    }
}

function checkRole(role){
        
}

router.post('/login', passport.authenticate('local'), (req,res,next)=>{
        console.log(req.user)
        return res.status(200).json(req.user);    
});


router.post('/signup',(req,res,next)=>{
    User.register(req.body, req.body.password)
    .then(user=>{
      return res.status(202).json(user)
    })
    .catch(e=>next(e));
})

/* 
router.post('facebook/login', passport.authenticate('facebook-token') ,(req,res)=>{
    res.json(req.user)
})
*/

module.exports = router;
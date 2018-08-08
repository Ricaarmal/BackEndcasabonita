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


router.post('/login', passport.authenticate('local'), (req,res,next)=>{
        req.app.locals.user = req.user;
        return res.status(200).json(req.user);    
});


router.post('/signup',(req,res,next)=>{
    User.register(req.body, req.body.password)
    .then(user=>{
      return res.status(202).json(user)
    })
    .catch(e=>next(e));
})

router.get('/loggedUser', isAuthenticated, (req,res)=>{
    console.log("LOGGED USER POST RESULT" + req.user)
    User.findById(req.user._id)
    .populate('messages')
    .populate('product')
    .then(user=>{
        console.log(user)
        return res.json(user)
        
    })
    .catch(e=>console.log(e))
})


/* 
router.post('facebook/login', passport.authenticate('facebook-token') ,(req,res)=>{
    res.json(req.user)
})
*/

module.exports = router;
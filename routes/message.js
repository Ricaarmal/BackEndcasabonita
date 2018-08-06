const Message = require('../models/Message');
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all Messages

router.get('/', (req, res, next)=>{
  Message.find()
  .then(message => {
    return res.status(202).json(message)
  })
  .catch(e=>{
      console.log(e) 
      res.status(500).res.json(e)
    })
})


// Create Product

router.post('/create', (req, res, next) => {
    Message.create(req.body)
     .then(message =>{
        return res.status(201).json(message)
     })
     .catch(err => {
         return res.json(err).status(500)
     })              
})


// Get one product
// This bring us only One Product for Detail

router.get('/:id', (req, res) => {
  Message.findById(req.params.id)
      .then(message => {
          if (!message) return res.status(404)
          return res.status(200).json(message);
      })
      .catch(err => {
          return res.status(500).json(err);
      });
});



// Edit Products

//  this route make an update to the model phone,
//  but respect the filed even when they don't come in the update

router.put('/:id', (req, res, next) => {
  Message.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(message => {
          return res.status(202).json(message)
      }).catch(err => {
          return res.status(404).json(err);
      });

})

// Delete Product

// This route let us delete the product.

router.delete('/:id', (req, res, next) => {
  Message.findByIdAndRemove(req.params.id)
      .then(message => {
          res.status(200).json(message)
      })
      .catch(e=>{
          res.status(500).json({message:"algo falló"})
          next(e)
      });
});


module.exports = router;
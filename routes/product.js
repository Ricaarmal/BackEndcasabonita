const Product = require('../models/Product');
const express = require('express');
const router = express.Router();

const uploadCloud = require('../helpers/cloudinary')

// Get all Products

router.get('/', (req, res, next)=>{
  Product.find()
  .then(product=>{
    return res.status(202).json(product)
  }).catch(e=>next(e))
})


// Create Product

router.post('/new', uploadCloud.single('image'), (req, res, next) => {
  if(req.file) req.body.image = req.file.url;
 Product.create(req.body)
     .then(product => {
         return res.status(201).json(product)
     })
     .catch(err => {
         return res.json(err).status(500)
     })              
})


// Get one product
// This bring us only One Product for Detail

router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
      .then(product => {
          if (!product) return res.status(404)
          return res.status(200).json(product);
      })
      .catch(err => {
          return res.status(500).json(err);
      });
});



// Edit Products

//  this route make an update to the model phone,
//  but respect the filed even when they don't come in the update

router.put('/:id', (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(product => {
          return res.status(202).json(product)
      }).catch(err => {
          return res.status(404).json(err);
      });

})

// Delete Product

// This route let us delete the product.

router.delete('/:id', (req, res, next) => {
  Product.findByIdAndRemove(req.params.id)
      .then(product => {
          res.status(200).json(product)
      })
      .catch(e=>{
          res.status(500).json({message:"algo falló"})
          next(e)
      });
});


module.exports = router;
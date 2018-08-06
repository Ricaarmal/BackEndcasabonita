const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  quantity:{
    type: Number,
    required: true
  },
  image:
    {
    type: String,
    default: ""
    }
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


const Product = mongoose.model('Product', productSchema);
module.exports = Product;
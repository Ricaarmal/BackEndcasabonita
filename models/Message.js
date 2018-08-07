const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  clientName: String,
  address: String,
  phone: Number,
  quantity:{
    type: Number,
    min: 0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  deliver: {
    type: Boolean,
    default: false
  },
  location:{
        type:{
            type:String,
            default:'Point'
        },
        address:String,
        coordinates:[
        {
          type:Number
        } 
    ]
  }
},{
  timestamps:{
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
})

module.exports = mongoose.model('Message', messageSchema);

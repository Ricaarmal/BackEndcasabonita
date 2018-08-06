const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  
  name: String,
  
	user:{
		type: Schema.Types.ObjectId,
		ref: "User"
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
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
});



module.exports = mongoose.model('Shop', shopSchema);
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;

const userSchema = new require('mongoose').Schema({
    username: String,
    email: {
        type: String,
        require: true
    },
    role:{
        type: String,
        enum: ['USER', 'TENDER', 'ADMIN'],
        default: 'USER'
    },
    products:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    messages:[
        {
      type: Schema.Types.ObjectId,
      ref: 'Message'  
        }
    ]
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('User', userSchema);

//facebookId: profile.id he ahi lo que viene debe venir en consola.
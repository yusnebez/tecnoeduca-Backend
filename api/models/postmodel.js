const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    title:{
        type: String,
        required: [true]
    },
    
    description:{
        type: String,
        
    },

    descriptionshort:{
        type: String,
    },
    
    price:{
        type: String,
    
    },

    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin"
    },

    Adress:{
        type: String,
        
    },
    
    Type:{
        type: Array,
        default: [],
        
    },

    Rules:{
        type: Array,
        default: [],
        
    },

    Details:{
        type: Array,
        default: [],
        
    },
    
    image: {
        type: String,
      },

   

});

const PostModel = mongoose.model('Post', postSchema)
module.exports = PostModel;
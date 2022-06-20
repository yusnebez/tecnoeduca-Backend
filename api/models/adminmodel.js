const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({

    name:{ 
        type: String,
        required: [true ,'Nombre Obligatorio.']
    },
    password:{
        type: String,
        required: [true ,'Nombre Obligatorio.']
    },
    email:{
        type: String,
        required: [true ,'email Obligatorio.'],
        unique: [true, 'Este email esta registrado.']

    },
    post:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }]
    // date:{},
    // notification:{},
    
});

const AdminModel = mongoose.model('Admin', adminSchema)
module.exports = AdminModel;




const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({

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
    subjects:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject"
    }]
    // date:{},
    // notification:{},
    
});

const teachermodel = mongoose.model('teacher', teacherSchema)
module.exports = teachermodel;




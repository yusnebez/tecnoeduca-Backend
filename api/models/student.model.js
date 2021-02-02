const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true ,'Nombre Obligatorio.']
    },
    lastname:{
        type: String,
        required: [true ,'Apellido es Obligatorio.']
    },
    email:{
        type: String,
        required: [true ,'Apellido es Obligatorio.'],
        unique: [true, 'Este email esta registrado.']
    },
    // class:{},
    // notes:[{
    //     type: mongoose.Schema.Types.ObjectId
    // }],
    // works:{},
    // media
    subjects:[{
        info: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subject"
            },
        note: {
            type: Number, default:0
        }
       
    }],
    // teacher:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"teacher"
    // }
});

const studentmodel = mongoose.model('student', studentSchema)
module.exports = studentmodel;


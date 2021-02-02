const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({

    students:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    }],
    name:{
        type: String,
        required: [true ,'Nombre Obligatorio.']
    },
    // date:{},
   
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher"
    }

});

const subjectmodel = mongoose.model('subject', subjectSchema)
module.exports = subjectmodel;
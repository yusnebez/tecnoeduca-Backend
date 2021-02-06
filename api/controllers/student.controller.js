const studentModel = require("../models/student.model")
const { handleError } = require("../utils")

function createStudent(req, res){
    studentModel
    .create({
        name: req.body.name,
        email: req.body.email,
        lastname: req.body.lastname,

    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
//   {email: { $regex: req.body.email } }

function getbyEmail(req,res){
    studentModel
    .findOne(req.query)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
   
    
    
}

function getAllStudents(req, res){
    studentModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getStudentById(req, res){
    studentModel
    console.log()
    .findById(req.body.email)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

function addSubject(req, res){
    studentModel
    .findById(req.params.id)
    .then(response => {
        response.subjects.push({
            info: req.params.subjectId
        })
        response.save()

    })
    .catch((err) => handleError(err, res))

}

function updateStudent(req, res){
    studentModel
    .findByIdAndUpdate(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

function deleteStudentById(req, res){
    studentModel
    .findByIdAndRemove(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

module.exports = {

    createStudent,
    getbyEmail,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudentById,
    addSubject,
}
const subjectModel = require("../models/subject.model")
const { handleError } = require("../utils")

function createSubject(req, res){
    subjectModel
    .create({
        name: req.body.name,
        
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getAllSubjects(req, res){n
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getSubjectById(req, res){
    subjectModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

function updateSubject(req, res){
    subjectModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

function deleteSubjectById(req, res){
    subjectModel
    .findByIdAndDelete(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

module.exports = {

    createSubject,
    getAllSubjects,
    getSubjectById,
    updateSubject,
    deleteSubjectById,

}
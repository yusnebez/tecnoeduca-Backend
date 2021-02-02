const teacherModel = require("../models/teacher.model")
const { handleError } = require("../utils")

function getAllTeachers(req, res){
    teacherModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getTeacherById(req, res){
    teacherModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

function updateTeacher(req, res){
    teacherModel
    .findByIdAndUpdate(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

function deleteTeacherById(req, res){
    teacherModel
    .findByIdAndRemove(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

module.exports = {

    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacherById,

}
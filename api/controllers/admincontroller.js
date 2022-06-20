const AdminModel = require("../models/adminmodel")
const { handleError } = require("../utils")


const getAllAdmin = (req, res) => {
    AdminModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
} 


const getAdminById = (req, res) => {
    AdminModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

const updateAdmin = (req, res) => {
    AdminModel
    .findByIdAndUpdate(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

const deleteAdminById = (req, res) => {
    AdminModel
    .findByIdAndRemove(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

module.exports = {

    getAdminById,
    updateAdmin,
    deleteAdminById,
    getAllAdmin

}
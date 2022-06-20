const VillaModel =  require("../models/postmodel")
const  handleError = require("../utils")

const createPost = (req, res) => {
    VillaModel
    .create({
        title: req.body.title,
        description: req.body.description,
        descriptionshort: req.body.descriptionshort,
        price: req.body.price,
        image: req.body.image
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

const getAllPost =(req, res) => {
    VillaModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

const getPostById = (req, res) => {
    VillaModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

const updatePost = (req, res) => {
    VillaModel
    .findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

const deletePostById = (req, res) => {
    VillaModel
    .findByIdAndDelete(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))

}

module.exports = {

    createPost,
    getAllPost,
    getPostById,
    updatePost,
    deletePostById,

}
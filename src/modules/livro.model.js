const mongoose = require ('../config/mongo.js')
const {Schema} = mongoose

const livroSchema = new Schema({
    titulo: String,
    num_paginas: Number,
    isbn: String,
    editora: String
},
{
    timestamps: true
})

const LivroModel = mongoose.model('livro', livroSchema)

module.exports = LivroModel
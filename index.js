const express = require('express')
const livroModel = require ('./src/modules/livro.model')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

//ROTAS

//CREATE
app.post('/cadastro', async (req, res) => {
    const livro = await livroModel.create({
        titulo: req.body.titulo,
        num_paginas: req.body.num_paginas,
        isbn: req.body.isbn,
        editora: req.body.editora
    })
    return res.status(201).json(livro)
})

//READ
app.get('/livro', async (req, res) => {
    const livros = await livroModel.find({})
    return res.status(200).json(livros)
})

//UPDATE (SEM AULA)
app.put('/atualizar/:id', async (req, res) => {
    //começo
    const id = req.params.id

    const livro = {
        titulo: req.body.titulo,
        num_paginas: req.body.num_paginas,
        isbn: req.body.isbn,
        editora: req.body.editora
    }

    const atualizarLivro = await livroModel.findByIdAndUpdate(id, livro)

    //final
    return res.status(200).json(livro)
})

//DELETE (SEM AULA)
app.delete('/deletar/:id', async(req, res) => {
    //começo
    try {
        const id = req.params.id

        const service = await livroModel.findById(id)
        if(!service){
            res.status(404).json({msg:"Serviço não encontrado."})
            return
        }

        const deletarService = await livroModel.findByIdAndDelete(id)
        return res.status(200).json(deletarService)

    } catch (error) {
        console.log(error)
    }

    //final
    // return res.status(200).json(deletarService)
    
})

app.listen(8080, () => {
    console.log('Servidor funcionando na porta 8080')
})
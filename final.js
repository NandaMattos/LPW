const express = require('express')
const { response } = require('express')
const { request } = require('http')
const app = express()

app.use(express.json())
//a
const sneaker = [
 {idprodu: 201800469,
 nameprodu: 'Supra', 
 quantity: 100,  
 saleprice: 550
 }
]

app.post('/sneaker/:id', (req, res) => { 
    const {idprodu, nameprodu,quantity, saleprice} = req.body
    const tenis = {
        idprodu,
        nameprodu,
        quantity,
        saleprice
    }
    return res.json(sneaker.push(tenis))
})

//b
app.get('/sneaker/:id', (req, res) => {
    const { indice } = req.params
    const sneaker = req.body
    sneaker[indice] = 'tenis'
    return res.json(sneaker)
})

//c
app.get('/sneaker', (req, res, next) => {
    const { id } = req.params
    const {idprodu} = req.body
    if (!idprodu){
        return res
          .status(400)
          .json({erros: 'Não existe informação com esse id.'})
    }
    return next()
})

//d
app.put('/sneaker',(req, res) => { 
    const {idprodu, nameprodu,quantity, saleprice} = req.body
    const tenis = {
        idprodu,
        nameprodu,
        quantity,
        saleprice
    }
    return res.json(sneaker.push(tenis))
})
app.put('/sneaker/:id', (req, res) => {
    const { tenis } = req.params
    return res.json(sneaker[tenis])
})

//e
app.delete('/sneaker/:indice', (req, res) =>{
    const {idprodu} = req.params; 
    sneaker.splice(idprodu)
    return res.json(sneaker) 
 } )

app.listen(3333, () =>{
    console.log('Server running')
})
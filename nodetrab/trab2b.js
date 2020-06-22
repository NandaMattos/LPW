//array
const app = req("express")()

const product = [
 {idprodu: 201800469, nameprodu: 'Ap', quantity: 100, univalue: 200000,
 totprice: 250000, saleprice: 350000, profit: 150000, produsitu: "available"}
]

//1a
const {idprodu, nameprodu, quantity, univalue, totprice, saleprice, profit, produsitu} =product
    let pt = quantity * univalue
    let pv = univalue + (univalue*0.12)
    let luc = pv - univalue
    let situprodu = undefined
    if(quantity < 50){
        situation = 'smooth'
    } else if(quantity >= 50 && quantity < 100){
        situation = 'good'
    } else if(quantity >= 100){
        situation = 'excelente'
    } 

//b
app.use((req, res, next) => {
    console.log("Controle de Estoque da Empresa ABC.")
    return next()
})

//c
app.put('/product/:indice', checkProductInArray, (req, res) => {
    const {indice} = req.params
    const product = req.body
    product[indice] = produto
    return res.json(product)
})

//d
const checkProductInArray = ((req, res, next) => {
    const {indice} = req.params
    if (!product[indice]) {
        return res
          .status
          .json({erros: 'Não existe produto com esse id.'})
    }
    return next()
})

//e
const checkProductExist = ((req, res, next) => {
    const {idprodu, nameprodu, quantity, univalue} = req.body
    if (!idprodu || !nameprodu || !quantity || !univalue){
        return res
            .status(400)
            .json({error: 'O campo id do produto ou nome do produto ou quantidade ou valor unitario ou complemento não existe no corpo da requisição'})
    }
    return next()
})

//f
app.get('/product/:indice', checkProductInArray, (req, res) => {
    const { indice } = req.params
    return res.json(product[indice])
})
app.post('/product', checkProductExist, (req, res) => { 
    const {idprodu, nameprodu,quantity, univalue} = req.body
    const product = {
        idprodu,
        nameprodu,
        quantity,
        univalue
    }
    return res.json(product.push(product))
})

//g
app.delete('/product/:indice', (req, res) =>{
    const {indice} = req.params; 
    product.splice(indice, 1)
    return res.json(product) 
 } )

//h
app.get("/product/:id/complemento", (req, res) => {
    return res.json({})
 })

app.listen(3333, () =>
{
    console.log('Server running')
})

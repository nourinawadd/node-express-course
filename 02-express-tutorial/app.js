const express = require('express')
const path = require('path')
const app = express()
const {products} = require('./data')
app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.json(products)
})

app.all('*', (req,res) => {
    res.status(404).send('Page not Found!')
})

app.listen(5000, ()=>{
    console.log('Server is listening...')
})
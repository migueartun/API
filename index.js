const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res) => res.redirect('/clientes'))
app.use('/clientes', require('./router/enrrutamiento.router'))
app.use('/servicios', require('./router/servicio.router'))

const PORT = process.env.PORT || 9999;

app.listen(PORT, ()=>{
    console.log('Aplicacion en linea')
})







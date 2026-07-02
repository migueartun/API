require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

const servicioEmail = require('./services/email.service')
app.get('/enviar', async (req,res)=>{
  try {
    await servicioEmail.sendEmail('migueartun@gmail.com', 'Prueba de correo', 'Este es un correo de prueba ()')
    res.send('Correo enviado correctamente')
  } catch (error) {
    res.status(500).send('Error al enviar el correo')
  }
})

app.get('/', (req,res) => res.redirect('/clientes'))
app.use('/clientes', require('./router/enrrutamiento.router'))
app.use('/servicios', require('./router/servicio.router'))
app.use('/usuarios', require('./router/usuario.router'))

const PORT = process.env.PORT || 9999;

app.listen(PORT, ()=>{
    console.log('Aplicacion en linea')
})







require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

const { sendEmail } = require('./services/email.service')

app.post('/enviar', async (req,res)=>{
  try {
    await sendEmail(
      req.body.correo || process.env.MAIL,
      req.body.asunto || 'Sin asunto',
      req.body.mensaje || 'Sin mensaje'
    );
    res.redirect('/clientes?mensaje=Correo enviado correctamente');
  } catch (error) {
    res.redirect('/clientes?mensaje=Error al enviar el correo');
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







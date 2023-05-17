const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

//Asignamos el PUERTO
const port = 8085

app.use(express.static('public'))


app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//Página principal
app.get('/',(req, res) => {
    res.render('disponibilidad')
})

app.listen(port, () =>
console.log(`Escuchando por el puerto ${port}`))
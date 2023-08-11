require('dotenv').config()
const express = require("express")

const app = express()

app.use(express.urlencoded({ extended: false})) // obligatorio para subir 
// datos de un formulario


app.use('/users', require('./src/routes/userRoute'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))


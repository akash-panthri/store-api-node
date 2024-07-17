require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
// async error
const errorMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')
const connectDb = require('./db/connect')
const routes = require('./routes/products')


//middleware
app.use(express.json())

// routes
app.get('/', (req, res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>')
    
})

// Connect to Database
connectDb()

const port = process.env.PORT || 5000
// product route

app.use('/api/v1/products',routes)
app.use(notFoundMiddleware)
app.use(errorMiddleware)


const start = async ()=>{
    try {
        app.listen(port, console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.log(error)
    }

}

start()
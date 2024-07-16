require('dotenv').config()

const express = require('express')
const app = express()
// async error
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())

// routes
app.get('/', (req, res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>')
    
})

const port = process.env.PORT || 5000
// product route

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
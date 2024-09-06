const express = require('express')

const path = require('path')

const app = express()

require("dotenv").config();

const cors = require("cors");

const userRoutes= require('./routes/userRoute')

const authRoutes = require('./routes/auth')

const connection = require("./db")

//database connection
connection()

//middlewares
app.use(express.json());

app.use(cors());


//routes
app.use("/api/users",userRoutes);

app.use("/api/auth",authRoutes)

if (process.env.NODE_ENV === 'production'){
app.use(express.static('client/build'))

app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}

const port = process.env.PORT||8080

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`app listening on port ${port}!`))
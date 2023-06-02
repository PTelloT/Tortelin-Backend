import express from "express"
import morgan from "morgan"
import testRoutes from './routes/test.routes'

const app = express()

app.use(morgan('dev'))

// Middleware
app.use(express.json()) //Si el cliente envia json -> objeto
app.use(express.urlencoded({extended: false})) //Cliente Form -> objeto, no admite imagenes

// Routes
app.get('/', (req,res) => {
    res.json("welcome")
})

app.use('/test',testRoutes)

export default app;
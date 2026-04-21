import express from 'express'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API running...')
})

app.use('/products',productRoutes)

export default app
import express from 'express'
import productsRouter from './routes/ProductRoute.js'

const app = express()

app.use('/items', productsRouter)
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
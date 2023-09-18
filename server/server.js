import express from 'express'
import productsRouter from './routes/routes.js'
import path from 'path'

const app = express()

app.use('/', express.static(path.join('../client')));
app.use('/public', express.static(path.join('../client/public')));
app.use('/scripts', express.static(path.join('../client/public/scripts')));

app.use('/items', productsRouter)

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
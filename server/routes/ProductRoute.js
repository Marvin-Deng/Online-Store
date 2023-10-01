import express from 'express'
import ProductView from '../views/ProductView.js'

const router = express.Router()

router.get('/', (req, res) => {
    ProductView.getProducts(req, res);
});

router.get('/:id', (req, res) => {
    ProductView.getProductById(req, res);
});

export default router
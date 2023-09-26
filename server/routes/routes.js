import express from 'express'
import data from '../data/data.js'
import ProductController from '../controllers/ProductController.js'

const router = express.Router()

router.get('/', ProductController.getProducts)

router.get('/:id', ProductController.getProductById) 

export default router
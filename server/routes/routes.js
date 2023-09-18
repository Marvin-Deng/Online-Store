import express from 'express'
import data from '../data/data.js'

const router = express.Router()

router.get('/', (req, res) => {
   res.status(200).json(data)
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json(data[id]);
})

export default router
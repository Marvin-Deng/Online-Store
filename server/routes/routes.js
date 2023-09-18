import express from 'express'
import data from '../data/data.js'

const router = express.Router()

router.get('/', (req, res) => {
   res.status(200).json(data)
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const item = data.find(item => item.id === id); 

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(item);
})

export default router
import express from 'express'
import path from 'path'

import data from '../data/data.js'

const router = express.Router()

router.get('/', (req, res) => {
   res.status(200).json(data)
})

router.get('/:id', (req, res) => {
    res.status(200).sendFile(path.resolve('../client/public/details.html'))
})

export default router
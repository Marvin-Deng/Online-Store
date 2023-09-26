import { pool } from '../config/db.js'

const getProducts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM eshop ORDER BY id ASC')
        res.status(200).json(results.rows)
    } 
    catch (error) {
        res.status(400).json({ error: error.message } )
    }
}

const getProductById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const results = await pool.query('SELECT * FROM eshop WHERE id = $1', [id]);
        res.status(200).json(results.rows[0]);
    } 
    catch (error) {
        res.status(400).json({ error: error.message } )
    }
}
    
export default {
    getProducts, 
    getProductById
}

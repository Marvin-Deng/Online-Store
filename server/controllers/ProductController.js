import { pool } from '../config/db.js';

class ProductController {
    static async getProducts() {
        try {
            const results = await pool.query('SELECT * FROM eshop ORDER BY id ASC');
            return results.rows;
        } 
        catch (error) {
            throw error;
        }
    }

    static async getProductById(id) {
        try {
            const results = await pool.query('SELECT * FROM eshop WHERE id = $1', [id]);
            return results.rows[0];
        } 
        catch (error) {
            throw error;
        }
    }
}

export default ProductController;

import { pool } from '../config/db.js'
import '../config/dotenv.js'
import data from '../data/data.js'

const createTableQuery = `
    DROP TABLE IF EXISTS eshop;

    CREATE TABLE IF NOT EXISTS eshop (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        pricePoint VARCHAR(10) NOT NULL,
        image VARCHAR(255) NOT NULL,
        ratings VARCHAR(25),
        condition VARCHAR(100) 
    )
`
const createProductsTable = async () => {
    try {
        const res = await pool.query(createTableQuery)
    }
    catch (err) {
        throw new Error('Failed to create the products table: ' + err.message);
    }
}

const seedProductsTable = async () => {
    await createProductsTable()

    data.forEach((product) => {
        const insertQuery = {
            text: 'INSERT INTO eshop (name, pricePoint, image, ratings, condition) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            product.name,
            product.pricePoint,
            product.image,
            product.ratings,
            product.condition
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ Error creating table:', err.message);
                return
            }
        })
    })
  
}

seedProductsTable()
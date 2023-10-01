import ProductController from "../controllers/ProductController.js";

class ProductViews {
    static async getProducts(req, res) {
        try {
            const products = await ProductController.getProducts();
            res.status(200).json(products);
        } 
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getProductById(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const product = await ProductController.getProductById(id);
            res.status(200).json(product);
        } 
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default ProductViews;

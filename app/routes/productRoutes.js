const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rotas CRUD
router.get('/products', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;

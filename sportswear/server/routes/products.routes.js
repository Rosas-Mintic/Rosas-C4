import { Router } from 'express';
import {availableProducts, createProduct, deleteProduct, getProduct, getProducts, updateProduct, updateStockProduct} from "../controllers/products.controllers.js"

const router = Router();

router.get('/products', getProducts)
router.post('/products', createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct )
router.get('/availableproducts', availableProducts)
router.put('/modifystock', updateStockProduct)

router.get('/products/:id', getProduct)

export default router
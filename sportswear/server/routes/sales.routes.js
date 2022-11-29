import { Router } from 'express';
import { createSale, getSales } from '../controllers/sales.controllers.js';

const router = Router();

router.get('/sales', getSales)
router.post('/sales', createSale)

export default router
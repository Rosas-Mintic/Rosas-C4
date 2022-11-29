import { Router } from 'express';
import { addCartItem, getCart, purchase, removeCartItem, totalPrice } from '../controllers/cart.controllers.js';

const router = Router();

router.get('/cart', getCart)
router.post('/cart', addCartItem)
router.delete('/cart/:id', removeCartItem )
router.get('/cartprice', totalPrice)
router.get('/purchase', purchase )

export default router
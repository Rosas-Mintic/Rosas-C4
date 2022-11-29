import Cart from '../models/cart.js'
import { updateStockProduct } from './products.controllers.js';
import { createSale } from './sales.controllers.js';

export const getCart = async (req, res) => {
    try {
        //throw new Error('This is my own error')
        const cart = await Cart.find()
        res.send(cart)
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
};

export const addCartItem = async (req,res) =>{
    try {
        const { name, amount, image, price, total} = req.body        
        const cartItem = new Cart({ name, amount, image, price, total })
        await cartItem.save()
        return res.json(cartItem)
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
}

export const removeCartItem = async (req, res) => {
    try {
        const cartItemRemoved = await Cart.findByIdAndDelete(req.params.id);

        if (!cartItemRemoved) return res.sendStatus(404)
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
};

export const totalPrice = async (req, res) => {
    try {
        //throw new Error('This is my own error')
        const totalCart = await Cart.find().select({ _id: 0, total: 1 })
        let totalCost = 0
        for (let i = 0; i < totalCart.length; i++) {
            totalCost += totalCart[i].total;            
        }
        res.send(totalCost.toString())
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
};

//modifica stock desde purchase(confirmacion de compra)
export const purchase = async (req, res) => {
    try {
        const purchasedItems = await Cart.find().select({ _id: 0, name: 1, amount: 1 })
        for (let i = 0; i < purchasedItems.length; i++) {
            updateStockProduct(purchasedItems[i])              
        }


        const confirmedPurchase = await Cart.deleteMany({})
        if (!confirmedPurchase) return res.sendStatus(404)
        
        return res.sendStatus(204);
               
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
}
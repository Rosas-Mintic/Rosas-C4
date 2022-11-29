import Product from '../models/product.js'
import { uploadImage, deleteImage } from '../libraries/cloudinary.js';
import fs from 'fs-extra'


export const getProducts = async (req, res) => {
    try {
        //throw new Error('This is my own error')
        const products = await Product.find()
        res.send(products)
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
};

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body

        let image = null;

        if (req.files.image) {
            const fileUpload = await uploadImage(req.files.image.tempFilePath)
            image = {
                url: fileUpload.secure_url,
                public_id: fileUpload.public_id
            }
            await fs.remove(req.files.image.tempFilePath)
        }

        const newProduct = new Product({ name, description, price, image, stock })
        await newProduct.save()
        return res.json(newProduct)
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
};

export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedProduct) {
            return res.sendStatus(404)

        } else {
            return res.json(updatedProduct)
        }
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const productRemoved = await Product.findByIdAndDelete(req.params.id);

        if (!productRemoved) return res.sendStatus(404)
        if (productRemoved.image.public_id) {
            await deleteImage(productRemoved.image.public_id)
        }
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.sendStatus(404)
        } else {
            return res.json(product)
        }
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
};


export const availableProducts = async (req, res) => {
    try {
        //throw new Error('This is my own error')
        const availableProducts = await Product.find( { stock: { $gt : 0 }  })
        res.send(availableProducts)
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
};

export const updateStockProduct = async (req, res) => {
    
        const currentStock = await Product.findOne({name: req.name}).select({ _id: 0, stock: 1 })
        const updatedStock = currentStock.stock-req.amount 
        const updatedStockProduct = await Product.findOneAndUpdate({name: req.name},{stock: updatedStock}, { new: true })
        /*if (!updatedStockProduct) {
            return res.sendStatus(404)

        } else {
            return res.json(updatedStockProduct)
        }*/
    
};

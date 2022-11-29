import Sale from '../models/sale.js'

export const getSales = async (req, res) => {
    try {
        //throw new Error('This is my own error')
        const sales = await Sale.find()
        res.send(sales)
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
};

export const createSale = async (req, res) => {
    try {
        const { date, amount } = req.body   

        const newSale = new Sale({ date, amount })
        await newSale.save()
        return res.json(newSale)
    } catch (error) {
        return res.status(500).json("Error: " + error.message)
    }
};
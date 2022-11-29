import express from 'express';
import productsRoutes from "./routes/products.routes.js";
import salesRoutes from "./routes/sales.routes.js";
import cartRoutes from "./routes/cart.routes.js"
import fileUpload from 'express-fileupload';

const app = express();

app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './files'
}))

app.use(productsRoutes);
app.use(salesRoutes);
app.use(cartRoutes)

export default app;
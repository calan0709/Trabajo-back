import { Router } from "express";
import Product_models from "../models/product.js";

const productRouter = Router();

const products = []; //arreglo vacio para incertar productos
//GET

//create/Post
productRouter.post('/',async(req, res)=>{
   try {
        let one = await Product_models.create(req.body)
        return res.status(201).json({
            success: true,
            message: `product id: ${one._id}`
        })
   } catch (error) {
        next(error)
   }
})
//....
//leemos la informacion de los productos/READ
productRouter.get('/',async(req, res)=>{ 
    try {
        let all = await Product_models.find()
        return res.status(200).json({
            success: true,
            response: all
        })
    } catch (error) {
        next(error)
    }
})

//UPDATE
productRouter.put('/',async(req,res)=>{
    try {
        let {id} = req.params
        let data = req.body
        let one = await Product_models.findByIdAndUpdate(id,data)// le pasamos el id y la data a modificar
        if (one && data){
            return res.status(200).json({
                success: true,
                message: `product id: ${one._id} modified`
            })
        }
        return res.status(404).json({
            success: false,
            message: 'product not found'
        })
    } catch (error) {
        next(error)
    }
})

//delete

productRouter.delete('/', (req, res)=>{
    
})

export default productRouter;
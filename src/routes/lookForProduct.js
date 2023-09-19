import { Router } from "express";
import lookforModel from "../models/look.for.products";

const lookForProducts = Router();

//leemos la informacion de los productos/READ
productRouter.get('/',async(req,res,next)=>{ 
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

export default lookForProducts;
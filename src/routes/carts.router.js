import { Router } from "express";
import Cart_models from "../models/cart.js";

const cartsRouter = Router();

//Post
cartsRouter.post('/',async(req,res,next)=>{
    try {
         let one = await Cart_models.create(req.body)
         return res.status(201).json({
             success: true,
             message: `cart id: ${one._id}`
         })
    } catch (error) {
         next(error)
    }
 })
 
 //READ
 cartsRouter.get('/',async(req,res,next)=>{ 
     try {
         let all = await Cart_models.find()
         return res.status(200).json({
             success: true,
             response: all
         })
     } catch (error) {
         next(error)
     }
 })
 
 //UPDATE
 cartsRouter.put('/:id',async(req,res,next)=>{
     try {
         let {id} = req.params
         let data = req.body
         let one = await Cart_models.findByIdAndUpdate(id,data)// le pasamos el id y la data a modificar
         if (one && data){
             return res.status(200).json({
                 success: true,
                 message: `cart id: ${one._id} modified`
             })
         }
         return res.status(404).json({
             success: false,
             message: 'cart not found'
         })
     } catch (error) {
         next(error)
     }
 })
 
 //delete
 cartsRouter.delete('/:id',async(req,res,next)=>{
     try {
         let {id} = req.params
         let one = await Cart_models.findByIdAndDelete(id)
         if (one){
             return res.status(200).json({
                 succes:true,
                 message:'delated'
             })
         }
         return res.status(404).json({
             succes:false,
             message:'cart not found'
         })
     } catch (error) {
         next(error)
     }
 })
 
 export default cartsRouter;
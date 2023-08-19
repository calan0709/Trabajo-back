import { Router } from "express";
import User_models from "../models/user.js"

const userRouter = Router()
//CRUD

//create
userRouter.post('/',async(req,res,next)=>{
    try {
         let one = await User_models.create(req.body)
         return res.status(201).json({
             success: true,
             message: `user id: ${one._id}`
         })
    } catch (error) {
         next(error)
    }
 })

 //READ
 userRouter.get('/',async(req,res,next)=>{ 
     try {
         let all = await User_models.find()
         return res.status(200).json({
             success: true,
             response: all
         })
     } catch (error) {
         next(error)
     }
 })
 
 //UPDATE
 userRouter.put('/:id',async(req,res,next)=>{
     try {
         let {id} = req.params
         let data = req.body
         let one = await User_models.findByIdAndUpdate(id,data)// le pasamos el id y la data a modificar
         if (one && data){
             return res.status(200).json({
                 success: true,
                 message: `user id: ${one._id} modified`
             })
         }
         return res.status(404).json({
             success: false,
             message: 'user not found'
         })
     } catch (error) {
         next(error)
     }
 })
 
 //delete
 userRouter.delete('/:id',async(req,res,next)=>{
     try {
         let {id} = req.params
         let one = await User_models.findByIdAndDelete(id)
         if (one){
             return res.status(200).json({
                 succes:true,
                 message:'delated'
             })
         }
         return res.status(404).json({
             succes:false,
             message:'user not found'
         })
     } catch (error) {
         next(error)
     }
 })
 
 export default userRouter;
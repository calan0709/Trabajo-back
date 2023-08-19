import  {Router}  from "express";
import productRouter from "./products.router.js"
import userRouter from "./user.router.js";

const indexRouter = Router();

//rutas
indexRouter.use('/Product', productRouter);
indexRouter.use('/user',userRouter)

//emergent

/* console.log('hola puto')

Swal.fire({
    title: 'saludos',
    text: 'mensaje inicial',
    icon: 'succes'
}) */


export default indexRouter;
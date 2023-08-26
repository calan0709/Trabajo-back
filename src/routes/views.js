import  {Router}  from "express";
import productRouter from "./products.router.js"
import userRouter from "./user.router.js";

const viewsRouter = Router();

//rutas
viewsRouter.use('/Product', productRouter);
viewsRouter.use('/user',userRouter)

//emergent

/* console.log('hola puto')

Swal.fire({
    title: 'saludos',
    text: 'mensaje inicial',
    icon: 'succes'
}) */


export default viewsRouter;
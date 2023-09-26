import  {Router}  from "express";
import productRouter from "./products.router.js";
import userRouter from "./user.router.js";
import cartsRouter from "./carts.router.js";
import lookforModel from "../models/look.for.products.js";
import session_router from "./session.router.js"
import cookies_ruoter from "./cookies.router.js"


const viewsRouter = Router();

//rutas
viewsRouter.use('/Product', productRouter);
viewsRouter.use('/user',userRouter);
viewsRouter.use('/carts',cartsRouter);
viewsRouter.use('/cookies', cookies_ruoter);
viewsRouter.use('/session',session_router);

//emergent

/*

Swal.fire({
    title: 'saludos',
    text: 'mensaje inicial',
    icon: 'succes'
}) */


export default viewsRouter;
import 'dotenv/config.js'
import Express from "express";
import __dirname from './utils.js';
import viewsRouter from "./routes/views.js";
import {connect} from "mongoose";
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import cookieParser from "cookie-parser";

const app = Express()


app.use(Express.json());
app.use(Express.urlencoded({extended: true}));
app.use(Express.static('./src/public'));
app.use(cookieParser(process.env.SECRET_COOKIE));

app.set('views', `${__dirname}/views`);

//router
app.use('/api', viewsRouter);
app.use(errorHandler);
app.use(notFoundHandler);


//server
const PORT = 8080
const ready = ()=>{ 
    console.log ( 'server ready on port ' + PORT);
//conexion a moongose
connect ( 'mongodb+srv://cardozo9222:1234@cluster0.7yzqklp.mongodb.net/e-commerce' )
    .then(()=> console.log ('database connected'))
        .catch (err => console.log (err))
}
app.listen (PORT, ready)
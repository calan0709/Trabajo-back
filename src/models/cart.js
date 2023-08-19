import { model,Schema } from "mongoose";


let collection = 'cart'

let schema = new Schema({
    product: {type:String, required:true},
    unit: {type:Number, required:true}

})

const aCart = model(collection, schema)

export default aCart
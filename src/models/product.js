import { model,Schema } from "mongoose";


let collection = 'products'

let schema = new Schema({
    name: {type:String, required:true},
    description: {type:String, require:true},
    cost: {type:Number, required:true},
    image: {type:String}

})

const aProducts = model(collection, schema)

export default aProducts
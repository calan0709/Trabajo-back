import { model,Schema } from "mongoose";


let collection = 'user'

let schema = new Schema({
    name: {type:String, required:true},
    lastname: {type:String, require:true},
    mail: {type:String, required:true},
    username: {type:String, required:true},
    password: {type:String, required:true}

})

const aUser = model(collection, schema)

export default aUser
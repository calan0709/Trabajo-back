import mongoose from "mongoose";

const productCollection = 'lookForProducts'

const lookforSchema = new mongoose.Schema({
    name:{
        type:String,
        index:true
    },

})
const lookforModel = mongoose.model(productCollection, lookforSchema);
export default lookforModel;